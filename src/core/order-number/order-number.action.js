import { httpRequest } from '../../main/http';
import { ORDER_NUMBER_API } from './order-number.constant';
import { ORDER_NUMBER_ACTION_TYPE } from './order-number.type';
import { convertPurchaseData } from './order-number.ts.convert';

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

      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_SUCCESS,
        data: convertPurchaseData(response.data),
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

export function updatePurchaseOrderStatus(orderId, data, orderNumber) {
  return async (dispatch) => {
    try {
      await httpRequest({
        method: ORDER_NUMBER_API.UPDATE_PURCHASE.TYPE,
        url: ORDER_NUMBER_API.UPDATE_PURCHASE.ENDPOINT(orderId),
        data: { ...data, orderNumber },
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
