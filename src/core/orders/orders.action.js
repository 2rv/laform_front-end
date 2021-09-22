import { httpRequest } from '../../main/http';
import { ORDERS_API } from './orders.constant';
import { ORDERS_ACTION_TYPE } from './orders.type';
import { convertUsersOrderData } from './orders.convert';

export function ordersLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ORDERS_API.ORDERS_LOAD.TYPE,
        url: ORDERS_API.ORDERS_LOAD.ENDPOINT,
      });

      dispatch({
        type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_SUCCESS,
        payload: response.data.map(convertUsersOrderData),
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
