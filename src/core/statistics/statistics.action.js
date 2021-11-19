import { httpRequest } from '../../main/http';
import { STATISTICS_API } from './statistics.constant';
import { STATISTICS_ACTION_TYPE } from './statistics.type';
import { convertOrdersCount, convertPrice } from './statistics.convert';

export function fetchOrdersCount(query) {
  return async (dispatch) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.ORDERS_COUNT_PENDING,
    });

    try {
      const response = await httpRequest({
        method: STATISTICS_API.ORDERS_COUNT.TYPE,
        url: STATISTICS_API.ORDERS_COUNT.ENDPOINT(query),
      });

      dispatch({
        type: STATISTICS_ACTION_TYPE.ORDERS_COUNT_SUCCESS,
        payload: {
          data: convertOrdersCount(response.data[0].data),
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.ORDERS_COUNT_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function fetchPrice(query) {
  return async (dispatch) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.PRICE_PENDING,
    });

    try {
      const response = await httpRequest({
        method: STATISTICS_API.PRICE.TYPE,
        url: STATISTICS_API.PRICE.ENDPOINT(query),
      });

      dispatch({
        type: STATISTICS_ACTION_TYPE.PRICE_SUCCESS,
        payload: {
          data: convertPrice(response.data[0].data),
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.PRICE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
