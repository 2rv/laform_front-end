import { httpRequest } from '../../main/http';
import { MY_LIKES_API } from './my-likes.constant';
import { MY_LIKES_ACTION_TYPE } from './my-likes.type';
import { convertLikesData } from './my-likes.convert';

export function myLikesUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: MY_LIKES_API.LIKES_LOAD.TYPE,
        url: MY_LIKES_API.LIKES_LOAD.ENDPOINT,
      });

      const likes = convertLikesData(response.data);

      dispatch({
        type: MY_LIKES_ACTION_TYPE.MY_LIKES_UPLOAD_SUCCESS,
        payload: likes,
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
