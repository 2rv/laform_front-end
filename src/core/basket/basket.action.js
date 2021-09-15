import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import { BASKET_ACTION_TYPE } from './basket.type';
import { convertAddToCart } from './basket.convert';

export function basketUploadData() {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.BASKET_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: BASKET_API.BASKET_UPLOAD.TYPE,
        url: BASKET_API.BASKET_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: BASKET_ACTION_TYPE.BASKET_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.BASKET_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function basketLoadUserInfoData() {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.BASKET_LOAD_USER_INFO_DATA_PENDING,
    });

    try {
      const res = await httpRequest({
        method: BASKET_API.BASKET_LOAD_USER_INFO.TYPE,
        url: BASKET_API.BASKET_LOAD_USER_INFO.ENDPOINT,
      });
      const data = performBasketLoadUserInfoData(res.data);
      dispatch({
        type: BASKET_ACTION_TYPE.BASKET_LOAD_USER_INFO_DATA_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message);
        dispatch({
          type: BASKET_ACTION_TYPE.BASKET_LOAD_USER_INFO_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function checkPromoCode(data) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.CHECK_PROMO_CODE_PENDING,
    });

    try {
      const res = await httpRequest({
        method: BASKET_API.CHECK_PROMO_CODE.TYPE,
        url: BASKET_API.CHECK_PROMO_CODE.ENDPOINT,
        data,
      });
      const discount = performPromoCodeData(res.data);
      dispatch({
        type: BASKET_ACTION_TYPE.CHECK_PROMO_CODE_SUCCESS,
        payload: discount,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: BASKET_ACTION_TYPE.CHECK_PROMO_CODE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

//------------------------------------------------------------------
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
