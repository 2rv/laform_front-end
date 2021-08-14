import { httpRequest } from '../../main/http';
import { MY_LIKES_API } from './my-likes.constant';
import { MY_LIKES_ACTION_TYPE } from './my-likes.type';

export function myLikesUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: MY_LIKES_API.MY_LIKES_UPLOAD.TYPE,
        url: MY_LIKES_API.MY_LIKES_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
