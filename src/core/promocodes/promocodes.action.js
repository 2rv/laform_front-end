import { httpRequest } from '../../main/http';
import { PROMOCODES_API } from './promocodes.constant';
import { PROMOCODES_ACTION_TYPE } from './promocodes.type';
import { convertPromocodesData } from './promocodes.convert';

export function promocodesLoadData() {
  return async (dispatch) => {
    dispatch({
      type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: PROMOCODES_API.PROMOCODES_LOAD_DATA.TYPE,
        url: PROMOCODES_API.PROMOCODES_LOAD_DATA.ENDPOINT,
      });

      const data = response.data.map(convertPromocodesData);

      dispatch({
        type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_SUCCESS,
        promocodes: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function promocodesUpoadData(data) {
  return async (dispatch) => {
    dispatch({
      type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: PROMOCODES_API.PROMOCODES_UPLOAD_DATA.TYPE,
        url: PROMOCODES_API.PROMOCODES_UPLOAD_DATA.ENDPOINT,
        data,
      });

      dispatch({ type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_SUCCESS });
      dispatch(promocodesLoadData());
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function promocodeRemoveData(id) {
  return async (dispatch) => {
    dispatch({
      type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: PROMOCODES_API.PROMOCODE_REMOVE_DATA.TYPE,
        url: PROMOCODES_API.PROMOCODE_REMOVE_DATA.ENDPOINT,
        data: { id },
      });

      dispatch({ type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_SUCCESS });
      dispatch(promocodesLoadData());
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
