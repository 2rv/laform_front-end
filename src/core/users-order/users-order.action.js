import { httpRequest } from '../../main/http';
import { USERS_ORDER_API } from './users-order.constant';
import { USERS_ORDER_ACTION_TYPE } from './users-order.type';

export function usersOrderUploadData() {
  return async (dispatch) => {
    dispatch({
      type: USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: USERS_ORDER_API.USERS_ORDER_UPLOAD.TYPE,
        url: USERS_ORDER_API.USERS_ORDER_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
