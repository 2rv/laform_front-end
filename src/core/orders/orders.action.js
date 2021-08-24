import { httpRequest } from '../../main/http';
import { ORDERS_API } from './orders.constant';
import { ORDERS_ACTION_TYPE } from './orders.type';

export function ordersUploadData() {
  return async (dispatch) => {
    dispatch({
      type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: ORDERS_API.ORDERS_UPLOAD.TYPE,
        url: ORDERS_API.ORDERS_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
