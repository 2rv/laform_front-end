import { httpRequest } from 'src/main/http';
import {
  UserOrdersActionType,
  USER_ORDERS_ACTION_TYPE,
  QueryType,
} from './user-orders.type';
import { convertUsersOrderData } from './user-orders.convert';
import { Dispatch } from 'react';

export function getUserOrdersAction(query: QueryType) {
  return async (dispatch: Dispatch<UserOrdersActionType>) => {
    dispatch({
      type: USER_ORDERS_ACTION_TYPE.PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'purchase/user/get',
        params: {
          page: query.page,
          orderNumber: query.orderNumber,
          status: query.status,
          from: query.from,
          to: query.to,
        },
      });

      dispatch({
        type: USER_ORDERS_ACTION_TYPE.SUCCESS,
        orders: response.data[0].map(convertUsersOrderData),
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: USER_ORDERS_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
