import { httpRequest } from '../../main/http';
import { ORDERS_LIST_API } from './orders-list.constant';
import { ORDERS_LIST_ACTION_TYPE } from './orders-list.type';
import { convertPurchasesData } from './orders-list.convert';

export function ordersLoadData() {
  return async (dispatch) => {
    dispatch({
      type: ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ORDERS_LIST_API.ORDERS_LOAD.TYPE,
        url: ORDERS_LIST_API.ORDERS_LOAD.ENDPOINT,
      });

      const purchases = response.data.flatMap(convertPurchasesData);

      dispatch({
        type: ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_SUCCESS,
        payload: purchases,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
