import { httpRequest } from '../../main/http';
import { ORDERS_API } from './orders.constant';
import { ORDERS_ACTION_TYPE } from './orders.type';
import { convertUsersOrderData } from './orders.convert';

export function ordersLoadData(inputValue = '', size, page) {
  return async (dispatch) => {
    dispatch({
      type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ORDERS_API.ORDERS_LOAD.TYPE,
        url: ORDERS_API.ORDERS_LOAD.ENDPOINT(inputValue, size, page),
      });

      dispatch({
        type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_SUCCESS,
        payload: {
          purchases: response.data.purchases.map(convertUsersOrderData),
          totalPages: response.data.total,
        },
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
