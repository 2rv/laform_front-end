import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import { BASKET_ACTION_TYPE, ORDER_FIELD_NAME } from './basket.type';
import {
  convertAddToCart,
  convertPromoCodeForCheck,
  performPromoCode,
  convertForCreateOrder,
  performUserInfoData,
  convertUserInfoData,
  convertSettingsDeliveryTypesData,
} from './basket.convert';
import { redirect } from 'src/main/navigation';
import { PURCHASE_PRODUCTS_ROUTE_PATH } from '../purchase-products';

export function basketUploadData(values, bascketState, isAuth) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.CREATE_ORDER_PENDING,
    });
    try {
      const data = convertForCreateOrder(values, bascketState);
      const responst = await httpRequest({
        method: BASKET_API.CREATE_ORDER.TYPE,
        url: BASKET_API.CREATE_ORDER.ENDPOINT(isAuth),
        data: data,
      });
      if (isAuth) {
        await httpRequest({
          method: BASKET_API.SEND_PURCHASED_PRODUCTS_INFO.TYPE,
          url: BASKET_API.SEND_PURCHASED_PRODUCTS_INFO.ENDPOINT,
          data,
        });
      }
      if (values[ORDER_FIELD_NAME.SAVE_USER_INFO] && isAuth) {
        await basketUpdateUserInfodData(values);
      }
      dispatch({
        type: BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS,
      });
      dispatch(clearBasketAction());
      if (isAuth) {
        redirect(PURCHASE_PRODUCTS_ROUTE_PATH);
      }
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.CREATE_ORDER_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getDeliveryTypes() {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.GET_DELIVERY_TYPES_PENDING,
    });

    try {
      const response = await httpRequest({
        method: BASKET_API.GET_DELIVERY_TYPES.METHOD,
        url: BASKET_API.GET_DELIVERY_TYPES.ENDPOINT,
      });

      dispatch({
        type: BASKET_ACTION_TYPE.GET_DELIVERY_TYPES_SUCCESS,
        payload: response.data.map(convertSettingsDeliveryTypesData),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.GET_DELIVERY_TYPES_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function sendEmailCode(data) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.SEND_EMAIL_CODE_PENDING,
    });

    try {
      await httpRequest({
        method: BASKET_API.SEND_EMAIL_CODE.METHOD,
        url: BASKET_API.SEND_EMAIL_CODE.ENDPOINT,
        data,
      });

      dispatch({
        type: BASKET_ACTION_TYPE.SEND_EMAIL_CODE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.SEND_EMAIL_CODE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function confirmEmailForOrder(code) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.CONFIRM_EMAIL_FOR_ORDER_PENDING,
    });

    try {
      const response = await httpRequest({
        method: BASKET_API.CONFIRM_EMAIL_FOR_ORDER.METHOD,
        url: BASKET_API.CONFIRM_EMAIL_FOR_ORDER.ENDPOINT(code),
      });

      dispatch({
        type: BASKET_ACTION_TYPE.CONFIRM_EMAIL_FOR_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.CONFIRM_EMAIL_FOR_ORDER_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

async function basketUpdateUserInfodData(values) {
  const response = await httpRequest({
    method: BASKET_API.UPDATE_USER_INFO.TYPE,
    url: BASKET_API.UPDATE_USER_INFO.ENDPOINT,
    data: convertUserInfoData(values),
  });
  return response;
}

export function LoadUserInfoAction() {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.LOAD_USER_INFO_PENDING,
    });

    try {
      const response = await httpRequest({
        method: BASKET_API.LOAD_USER_INFO.TYPE,
        url: BASKET_API.LOAD_USER_INFO.ENDPOINT,
      });
      const data = performUserInfoData(response.data);
      dispatch({
        type: BASKET_ACTION_TYPE.LOAD_USER_INFO_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.LOAD_USER_INFO_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function initializeBasketStore() {
  return async (dispatch) => {
    try {
      const basketStorage = JSON.parse(localStorage.getItem('basket'));
      if (basketStorage) {
        dispatch({
          type: BASKET_ACTION_TYPE.INIT_BASKET,
          data: basketStorage,
        });
      }
    } catch (error) {
      dispatch(clearBasketAction());
    }
  };
}

export function addToBasket(data, currentLang) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.PRODUCT_ADD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: BASKET_API.ADD_BACKET_LOAD_ITEM_INFO.TYPE,
        url: BASKET_API.ADD_BACKET_LOAD_ITEM_INFO.ENDPOINT(
          data.type,
          data.id,
          currentLang,
        ),
      });
      const basketStorage = JSON.parse(localStorage.getItem('basket'));
      const convertedData = convertAddToCart(
        response.data,
        data,
        basketStorage?.length,
      );
      if (basketStorage) {
        basketStorage.push(convertedData);
        localStorage.setItem('basket', JSON.stringify(basketStorage));
      } else {
        localStorage.setItem('basket', JSON.stringify([convertedData]));
      }
      console.log(convertedData);
      dispatch({
        type: BASKET_ACTION_TYPE.ADD_TO_BASKET,
        data: convertedData,
      });
    } catch (error) {
      console.log(error);
      dispatch(clearBasketAction());
    }
  };
}

export function changeItemAction(values, bascketState) {
  return async (dispatch) => {
    try {
      const { indexId, ...otherValues } = values;
      const changedState = bascketState.map((item) => {
        if (item.indexId === indexId) return { ...item, ...otherValues };
        return item;
      });
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: changedState,
      });
      localStorage.setItem('basket', JSON.stringify(changedState));
    } catch (error) {
      dispatch(clearBasketAction());
      dispatch({
        type: BASKET_ACTION_TYPE.PRODUCT_ADD_ERROR,
        errorMessage: err.response.data.message,
      });
    }
  };
}

export function deleteItemAction(params, bascketState) {
  return async (dispatch) => {
    try {
      const { indexId, id, sizeId, colorId, programId } = params;
      const changedState = bascketState.filter((item) => {
        if (item.indexId === indexId) {
          if (item.type === 0) return item.program !== programId;
          if (item.type === 1) return item.size !== sizeId;
          if (item.type === 2) return item.size !== sizeId;
          if (item.type === 3) {
            const isSize = item.size === sizeId;
            const isColor = item.color === colorId;
            return isSize && isColor ? false : true;
          }
        } else return true;
      });
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: changedState,
      });
      localStorage.setItem('basket', JSON.stringify(changedState));
    } catch (error) {
      dispatch(clearBasketAction());
    }
  };
}

export function checkPromoCodeAction(promocode) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.PROMOCODE_CHECK_PENDING,
    });
    const data = convertPromoCodeForCheck(promocode);
    try {
      const res = await httpRequest({
        method: BASKET_API.CHECK_PROMO_CODE.TYPE,
        url: BASKET_API.CHECK_PROMO_CODE.ENDPOINT,
        data,
      });
      dispatch({
        type: BASKET_ACTION_TYPE.PROMOCODE_CHECK_SUCCESS,
        data: res.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.PROMOCODE_CHECK_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function clearBasketAction() {
  return async (dispatch) => {
    try {
      localStorage.removeItem('basket');
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: [],
      });
    } catch (error) {
      localStorage.removeItem('basket');
    }
  };
}
