import { httpRequest } from '../../main/http';
import { ABOUT_API } from './about.constant';
import { ABOUT_ACTION_TYPE } from './about.type';

export function aboutUsUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACTION_TYPE.ABOUT_DATA_SAVE_PENDING,
    });
    try {
      await httpRequest({
        method: ABOUT_API.ABOUT_DATA_UPLOAD.TYPE,
        url: ABOUT_API.ABOUT_DATA_UPLOAD.ENDPOINT,
        data,
      });

      dispatch({
        type: ABOUT_ACTION_TYPE.ABOUT_DATA_SAVE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ABOUT_ACTION_TYPE.ABOUT_DATA_SAVE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function aboutUsLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ABOUT_ACTION_TYPE.ABOUT_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ABOUT_API.ABOUT_DATA_LOAD.TYPE,
        url: ABOUT_API.ABOUT_DATA_LOAD.ENDPOINT,
      });

      dispatch({
        type: ABOUT_ACTION_TYPE.ABOUT_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ABOUT_ACTION_TYPE.ABOUT_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
