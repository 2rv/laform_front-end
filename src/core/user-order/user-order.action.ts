import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { USER_ORDER_ACTION_TYPE, UserOrderActionType } from './user-order.type';
import { convertUserOrder } from './user-order.convert';

export function getOrderAction(id: string) {
  return async (dispatch: Dispatch<UserOrderActionType>) => {
    dispatch({
      type: USER_ORDER_ACTION_TYPE.PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/purchase/get/' + id,
      });
      const { order, products, price } = convertUserOrder(response.data);

      dispatch({
        type: USER_ORDER_ACTION_TYPE.SUCCESS,
        order: order,
        products: products,
        price: price,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: USER_ORDER_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function getLinkForPaymentOrder(id: string) {
  return async () => {
    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/payment/link/' + id,
      });

      if (response.data) {
        window.location.href = response.data;
      } else {
      }
    } catch (err: any) {
      console.log(err);
    }
  };
}
