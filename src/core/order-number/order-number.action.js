import { httpRequest } from '../../main/http';
import { ORDER_NUMBER_API } from './order-number.constant';
import { ORDER_NUMBER_ACTION_TYPE } from './order-number.type';
import { convertUsersOrderData } from './order-number.convert';

export function orderNumberUploadData(orderId) {
  return async (dispatch) => {
    dispatch({
      type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ORDER_NUMBER_API.ORDER_NUMBER_UPLOAD.TYPE,
        url: ORDER_NUMBER_API.ORDER_NUMBER_UPLOAD.ENDPOINT(orderId),
      });

      const orderNumberDetails = convertUsersOrderData(response.data);

      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_SUCCESS,
        orderNumberDetails,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
