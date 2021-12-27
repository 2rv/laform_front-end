import { httpRequest } from 'src/main/http';
import { OrdersActionType, ORDERS_ACTION_TYPE, QueryType } from './orders.type';
import { convertOrdersData } from './orders.convert';
import { Dispatch } from 'react';

export function getOrdersAction(query: QueryType) {
  return async (dispatch: Dispatch<OrdersActionType>) => {
    dispatch({
      type: ORDERS_ACTION_TYPE.PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: 'purchase/get',
        params: {
          page: query.page,
          orderNumber: query.orderNumber,
          status: query.status,
          from: query.from,
          to: query.to,
        },
      });

      dispatch({
        type: ORDERS_ACTION_TYPE.SUCCESS,
        orders: response.data[0].map(convertOrdersData),
        total: response.data[1],
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: ORDERS_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
