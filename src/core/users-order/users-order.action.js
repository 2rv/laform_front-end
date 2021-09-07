import { httpRequest } from '../../main/http';
import { USERS_ORDER_API } from './users-order.constant';
import { USERS_ORDER_ACTION_TYPE } from './users-order.type';
import { convertUsersOrderData } from './users-order.convert';

export function userOrdersLoadData(inputValue = '', size, page) {
  return async (dispatch) => {
    dispatch({
      type: USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: USERS_ORDER_API.USERS_ORDER_LOAD.TYPE,
        url: USERS_ORDER_API.USERS_ORDER_LOAD.ENDPOINT(inputValue, size, page),
      });

      dispatch({
        type: USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_SUCCESS,
        payload: {
          purchases: response.data.purchases.map(convertUsersOrderData),
          total: response.data.total,
        },
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
