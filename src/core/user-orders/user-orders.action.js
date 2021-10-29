import { httpRequest } from '../../main/http';
import { USER_ORDERS_API } from './user-orders.constant';
import { USER_ORDERS_ACTION_TYPE } from './user-orders.type';
import { convertUsersOrderData } from './user-orders.convert';

export function fetchUserOrders(page) {
  return async (dispatch) => {
    dispatch({
      type: USER_ORDERS_ACTION_TYPE.USER_ORDERS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: USER_ORDERS_API.USER_ORDERS_LOAD.TYPE,
        url: USER_ORDERS_API.USER_ORDERS_LOAD.ENDPOINT(page),
      });

      dispatch({
        type: USER_ORDERS_ACTION_TYPE.USER_ORDERS_UPLOAD_SUCCESS,
        payload: {
          userOrders: response.data[0].map(convertUsersOrderData),
          totalRecords: response.data[1],
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: USER_ORDERS_ACTION_TYPE.USER_ORDERS_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
