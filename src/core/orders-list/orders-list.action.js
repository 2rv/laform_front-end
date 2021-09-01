import { httpRequest } from '../../main/http';
import { ORDERS_LIST_API } from './orders-list.constant';
import { ORDERS_LIST_ACTION_TYPE } from './orders-list.type';

export function ordersListUploadData() {
  return async (dispatch) => {
    dispatch({
      type: ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: ORDERS_LIST_API.ORDERS_LIST_UPLOAD.TYPE,
        url: ORDERS_LIST_API.ORDERS_LIST_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
