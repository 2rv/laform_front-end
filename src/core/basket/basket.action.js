import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import { BASKET_ACTION_TYPE } from './basket.type';
import {
  convertAddToCart,
  convertPromoCodeForCheck,
  performPromoCode,
  convertForCreateOrder,
} from './basket.convert';

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
      console.log(responst.data);
      dispatch({
        type: BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS,
      });
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.CREATE_ORDER_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function LoadUserInfoAction() {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.LOAD_USER_INFO_PENDING,
    });

    try {
      const res = await httpRequest({
        method: BASKET_API.LOAD_USER_INFO.TYPE,
        url: BASKET_API.LOAD_USER_INFO.ENDPOINT,
      });
      dispatch({
        type: BASKET_ACTION_TYPE.LOAD_USER_INFO_SUCCESS,
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
      console.log(error);
      localStorage.removeItem('basket');
    }
  };
}

export function addToBasket(data, currentLang, isAuth) {
  return async (dispatch) => {
    try {
      const response = await httpRequest({
        method: BASKET_API.ADD_BACKET_LOAD_ITEM_INFO.TYPE,
        url: BASKET_API.ADD_BACKET_LOAD_ITEM_INFO.ENDPOINT(
          data.type,
          data.id,
          currentLang,
        ),
      });
      const convertedData = convertAddToCart(response.data, data);
      const basketStorage = JSON.parse(localStorage.getItem('basket'));
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
      console.log(error);
      localStorage.removeItem('basket');
    }
  };
}

export function changeItemAction(id, values, bascketState) {
  return async (dispatch) => {
    try {
      const changedState = bascketState.map((item) => {
        if (item.id === id) return { ...item, ...values };
        return item;
      });
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: changedState,
      });
      localStorage.setItem('basket', JSON.stringify(changedState));
    } catch (error) {
      console.log(error);
      localStorage.removeItem('basket');
    }
  };
}

export function deleteItemAction(id, bascketState) {
  return async (dispatch) => {
    try {
      const changedState = bascketState.filter((item) => item.id !== id);
      dispatch({
        type: BASKET_ACTION_TYPE.CHANGE_BASKET,
        data: changedState,
      });
      localStorage.setItem('basket', JSON.stringify(changedState));
    } catch (error) {
      console.log(error);
      localStorage.removeItem('basket');
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
