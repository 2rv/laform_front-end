import { httpRequest } from '../../main/http';
import { FAQ_API } from './faq.constant';
import { FAQ_ACTION_TYPE } from './faq.type';

export function faqUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: FAQ_ACTION_TYPE.FAQ_DATA_SAVE_PENDING,
    });

    try {
      await httpRequest({
        method: FAQ_API.FAQ_DATA_UPLOAD.TYPE,
        url: FAQ_API.FAQ_DATA_UPLOAD.ENDPOINT,
        data,
      });

      dispatch({
        type: FAQ_ACTION_TYPE.FAQ_DATA_SAVE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: FAQ_ACTION_TYPE.FAQ_DATA_SAVE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function fetchFaqData() {
  return async (dispatch) => {
    dispatch({
      type: FAQ_ACTION_TYPE.FAQ_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: FAQ_API.FAQ_DATA_FETCH.TYPE,
        url: FAQ_API.FAQ_DATA_FETCH.ENDPOINT,
      });

      dispatch({
        type: FAQ_ACTION_TYPE.FAQ_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: FAQ_ACTION_TYPE.FAQ_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
