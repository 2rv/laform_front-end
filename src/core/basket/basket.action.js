import { httpRequest } from '../../main/http';
import { BASKET_API } from './basket.constant';
import { BASKET_ACTION_TYPE } from './basket.type';
import { performBasketLoadUserInfoData } from './basket.convert';

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
        dispatch({
          type: BASKET_ACTION_TYPE.BASKET_LOAD_USER_INFO_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
