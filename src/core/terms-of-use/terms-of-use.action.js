import { httpRequest } from '../../main/http';
import { TERMS_OF_USE_API } from './terms-of-use.constant';
import { TERMS_OF_USE_ACTION_TYPE } from './terms-of-use.type';

export function termsOfUseUploadData(data) {
  return async (dispatch) => {
    try {
      await httpRequest({
        method: TERMS_OF_USE_API.TERMS_OF_USE_DATA_UPLOAD.TYPE,
        url: TERMS_OF_USE_API.TERMS_OF_USE_DATA_UPLOAD.ENDPOINT,
        data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: TERMS_OF_USE_ACTION_TYPE.TERMS_OF_USE_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function termsOfUseLoadData() {
  return async (dispatch) => {
    dispatch({
      type: TERMS_OF_USE_ACTION_TYPE.TERMS_OF_USE_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: TERMS_OF_USE_API.TERMS_OF_USE_DATA_LOAD.TYPE,
        url: TERMS_OF_USE_API.TERMS_OF_USE_DATA_LOAD.ENDPOINT,
      });

      dispatch({
        type: TERMS_OF_USE_ACTION_TYPE.TERMS_OF_USE_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: TERMS_OF_USE_ACTION_TYPE.TERMS_OF_USE_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
