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
      if (values[ORDER_FIELD_NAME.SAVE_USER_INFO] && isAuth) {
        await basketUpdateUserInfodData(values);
      }
      dispatch({
        type: BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS,
      });
      dispatch(clearBasketAction());
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
  // {id: продукт id , type: 0-3, size: id размера, color: id цвета, count: количество не превышающее максимума }
  // {id: обязательно , type: обязательно, size: необязательно (дефол первый в размерах), color: необязательно (дефол первый в цветах), count: необязательно (дефол 1) }
  // currentLang - обязательно так как будут делаться запросы на разные языки товара
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
      dispatch(clearBasketAction());
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
      dispatch(clearBasketAction());
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
