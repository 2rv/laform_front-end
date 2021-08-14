import { httpRequest } from '../../main/http';
import { ORDER_NUMBER_API } from './order-number.constant';
import { ORDER_NUMBER_ACTION_TYPE } from './order-number.type';

export function orderNumberUploadData() {
  return async (dispatch) => {
    dispatch({
      type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: ORDER_NUMBER_API.ORDER_NUMBER_UPLOAD.TYPE,
        url: ORDER_NUMBER_API.ORDER_NUMBER_UPLOAD.ENDPOINT,
      });

      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_SUCCESS,
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
