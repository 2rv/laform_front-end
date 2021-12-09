import { httpRequest } from '../../main/http';
import { USER_ORDER_API } from './user-order.constant';
import { USER_ORDER_ACTION_TYPE } from './user-order.type';
import { convertPurchaseData } from './user-order.convert';

export function userOrderUploadData(orderId) {
  return async (dispatch) => {
    dispatch({
      type: USER_ORDER_ACTION_TYPE.USER_ORDER_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: USER_ORDER_API.USER_ORDER_UPLOAD.TYPE,
        url: USER_ORDER_API.USER_ORDER_UPLOAD.ENDPOINT(orderId),
      });

      dispatch({
        type: USER_ORDER_ACTION_TYPE.USER_ORDER_UPLOAD_SUCCESS,
        data: convertPurchaseData(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: USER_ORDER_ACTION_TYPE.USER_ORDER_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
