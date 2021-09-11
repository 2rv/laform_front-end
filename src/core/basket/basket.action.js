import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import { BASKET_ACTION_TYPE } from './basket.type';
import {
  performBasketLoadUserInfoData,
  performPromoCodeData,
} from './basket.convert';

export function basketUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: BASKET_ACTION_TYPE.BASKET_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: BASKET_API.PURCHASE_CREATE.TYPE,
        url: BASKET_API.PURCHASE_CREATE.ENDPOINT,
        data,
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
