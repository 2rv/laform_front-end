import { httpRequest } from '../../main/http';
import { SIZE_API } from './size.constant';
import { SIZE_ACTION_TYPE } from './size.type';

export function saveDataAction(data) {
  return async (dispatch) => {
    dispatch({
      type: SIZE_ACTION_TYPE.DATA_SAVE_PENDING,
    });

    try {
      await httpRequest({
        method: SIZE_API.SAVE_DATA.TYPE,
        url: SIZE_API.SAVE_DATA.ENDPOINT,
        data: { data: data },
      });

      dispatch({
        type: SIZE_ACTION_TYPE.DATA_SAVE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SIZE_ACTION_TYPE.DATA_SAVE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getDataAction() {
  return async (dispatch) => {
    dispatch({
      type: SIZE_ACTION_TYPE.DATA_GET_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SIZE_API.GET_DATA.TYPE,
        url: SIZE_API.GET_DATA.ENDPOINT,
      });
      dispatch({
        type: SIZE_ACTION_TYPE.DATA_GET_SUCCESS,
        data: response.data?.data || [],
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SIZE_ACTION_TYPE.DATA_GET_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
