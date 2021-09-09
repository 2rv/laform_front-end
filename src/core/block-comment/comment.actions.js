import { httpRequest } from '../../main/http';
import { COMMENT_API } from './comment.constant';
import { COMMENT_ACTION_TYPE } from './comment.type';

export function commentUpload(id, type) {
  return async (dispatch) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: COMMENT_API.COMMENT_UPLOAD.TYPE,
        url: COMMENT_API.COMMENT_UPLOAD.ENDPOINT(id, type),
      });

      const data = response.data;

      dispatch({
        type: COMMENT_ACTION_TYPE.COMMENT_UPLOAD_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function commentCreate(convertedData) {
  return async (dispatch) => {
    dispatch({
      type: COMMENT_ACTION_TYPE.COMMENT_CREATE_PENDING,
    });
    try {
      const response = await httpRequest({
        method: COMMENT_API.COMMENT_CREATE.TYPE,
        url: COMMENT_API.COMMENT_CREATE.ENDPOINT,
        data: convertedData,
      });

      const data = response.data;

      dispatch({
        type: COMMENT_ACTION_TYPE.COMMENT_CREATE_SUCCESS,
        data: data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: COMMENT_ACTION_TYPE.COMMENT_CREATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
