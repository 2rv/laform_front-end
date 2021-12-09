import { httpRequest } from '../../main/http';
import { ORDERS_API } from './orders.constant';
import { ORDERS_ACTION_TYPE } from './orders.type';
import { convertOrdersData } from './orders.convert';

export function ordersLoadData(page) {
  return async (dispatch) => {
    dispatch({
      type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ORDERS_API.ORDERS_LOAD.TYPE,
        url: ORDERS_API.ORDERS_LOAD.ENDPOINT(page),
      });

      dispatch({
        type: ORDERS_ACTION_TYPE.ORDERS_UPLOAD_SUCCESS,
        payload: {
          orders: response.data[0].map(convertOrdersData),
          totalRecords: response.data[1],
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
