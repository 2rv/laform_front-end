import { httpRequest } from '../../main/http';
import { LIKE_API } from './like.constant';
import { LIKE_ACTION_TYPE } from './like.type';

export function createLike(data, id) {
  return async (dispatch) => {
    dispatch({
      type: LIKE_ACTION_TYPE.LIKE_UPLOAD_PENDING,
    });
    try {
      const response = await httpRequest({
        method: LIKE_API.LIKE_CREATE.TYPE,
        url: LIKE_API.LIKE_CREATE.ENDPOINT,
        data,
      });
      dispatch({
        type: LIKE_ACTION_TYPE.LIKE_UPLOAD_SUCCESS,
        data: id,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKE_ACTION_TYPE.LIKE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function deleteLike(data) {
  return async (dispatch) => {
    dispatch({
      type: LIKE_ACTION_TYPE.LIKE_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: LIKE_API.LIKE_DELETE.TYPE,
        url: LIKE_API.LIKE_DELETE.ENDPOINT,
        data,
      });

      dispatch({
        type: LIKE_ACTION_TYPE.LIKE_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: LIKE_ACTION_TYPE.LIKE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
