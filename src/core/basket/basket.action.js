import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import { BASKET_ACTION_TYPE, ORDER_FIELD_NAME } from './basket.type';
import {
  performDiliveryInfo,
  performUserInfo,
  convertPromoCode,
  convertUserInfo,
  convertForAuth,
} from './basket.convert';
import { redirect } from 'src/main/navigation';
import { PURCHASE_PRODUCTS_ROUTE_PATH } from '../purchase-products';
import { convertAddToCart, convertCreateOrder } from './basket.util';

export function getUserInfoAction() {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.LOAD_USER_INFO_PENDING,
    });

    try {
      const response = await httpRequest({
        method: BASKET_API.LOAD_USER_INFO.TYPE,
        url: BASKET_API.LOAD_USER_INFO.ENDPOINT,
      });
      dispatch({
        type: BASKET_ACTION_TYPE.LOAD_USER_INFO_SUCCESS,
        data: performUserInfo(response.data),
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
export function getDeliveryInfoAction() {
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
        payload: performDiliveryInfo(response.data),
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

export function sendEmailCodeAction(data) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.SEND_EMAIL_CODE_PENDING,
    });

    try {
      await httpRequest({
        method: BASKET_API.SEND_EMAIL_CODE.METHOD,
        url: BASKET_API.SEND_EMAIL_CODE.ENDPOINT,
        data: { email: data },
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
export function confirmEmailCodeAction(data) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.CONFIRM_EMAIL_FOR_ORDER_PENDING,
    });

    try {
      const response = await httpRequest({
        method: BASKET_API.CONFIRM_EMAIL_FOR_ORDER.METHOD,
        url: BASKET_API.CONFIRM_EMAIL_FOR_ORDER.ENDPOINT,
        data: convertForAuth(data),
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
export function confirmPromoCodeAction(promocode) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.PROMOCODE_CHECK_PENDING,
    });
    const data = convertPromoCode(promocode);
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

export function createOrderAction(
  values,
  bascketState,
  isAuth,
  purchaseTotalPrice = 0,
) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.CREATE_ORDER_PENDING,
    });
    try {
      const data = convertCreateOrder(values, bascketState);

      const response = await httpRequest({
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
        await updateUserInfoAction(values);
      }
      dispatch({
        type: BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS,
      });
      //   dispatch(clearBasketAction());
      if (isAuth) {
        redirect(PURCHASE_PRODUCTS_ROUTE_PATH);
      } else {
        alert('Для просмотра списка покупок необходима авторизация');
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.CREATE_ORDER_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
async function updateUserInfoAction(values) {
  const response = await httpRequest({
    method: BASKET_API.UPDATE_USER_INFO.TYPE,
    url: BASKET_API.UPDATE_USER_INFO.ENDPOINT,
    data: convertUserInfo(values),
  });
  return response;
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
      dispatch({
        type: BASKET_ACTION_TYPE.ADD_TO_BASKET,
        data: convertedData,
      });
    } catch (error) {
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
      const { indexId, optionId } = params;
      const changedState = bascketState.filter(
        (item) => item.indexId !== indexId,
      );
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
