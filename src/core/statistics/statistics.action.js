import { httpRequest } from '../../main/http';
import { STATISTICS_API } from './statistics.constant';
import { STATISTICS_ACTION_TYPE } from './statistics.type';
import { convertUsers, convertCount, convertPrice } from './statistics.convert';

export function getPriceStatistics(query) {
  return async (dispatch) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.GET_PRICE_PENDING,
    });

    try {
      const response = await httpRequest({
        method: STATISTICS_API.GET_PRICE.TYPE,
        url: STATISTICS_API.GET_PRICE.ENDPOINT(query),
      });
      dispatch({
        type: STATISTICS_ACTION_TYPE.GET_PRICE_SUCCESS,
        data: convertPrice(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.GET_PRICE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function getGeneralStatistics(query) {
  return async (dispatch) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.GET_GENERAL_PENDING,
    });

    try {
      const response = await httpRequest({
        method: STATISTICS_API.GET_GENERAL.TYPE,
        url: STATISTICS_API.GET_GENERAL.ENDPOINT(query),
      });
      dispatch({
        type: STATISTICS_ACTION_TYPE.GET_GENERAL_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.GET_GENERAL_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function getCountStatistics(query) {
  return async (dispatch) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.GET_COUNT_PENDING,
    });

    try {
      const response = await httpRequest({
        method: STATISTICS_API.GET_COUNT.TYPE,
        url: STATISTICS_API.GET_COUNT.ENDPOINT(query),
      });

      dispatch({
        type: STATISTICS_ACTION_TYPE.GET_COUNT_SUCCESS,
        data: convertCount(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.GET_COUNT_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
export function getUsersStatistics(query) {
  return async (dispatch) => {
    dispatch({
      type: STATISTICS_ACTION_TYPE.GET_USERS_PENDING,
    });

    try {
      const response = await httpRequest({
        method: STATISTICS_API.GET_USERS.TYPE,
        url: STATISTICS_API.GET_USERS.ENDPOINT(query),
      });
      dispatch({
        type: STATISTICS_ACTION_TYPE.GET_USERS_SUCCESS,
        data: convertUsers(response.data),
      });
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch({
          type: STATISTICS_ACTION_TYPE.GET_USERS_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
