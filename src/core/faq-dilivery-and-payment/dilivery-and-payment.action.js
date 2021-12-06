import { httpRequest } from '../../main/http';
import { DELIVERY_PAYMENT_API } from './dilivery-and-payment.constant';
import { DELIVERY_PAYMENT_ACTION_TYPE } from './dilivery-and-payment.type';

export function saveDataAction(data) {
  return async (dispatch) => {
    dispatch({
      type: DELIVERY_PAYMENT_ACTION_TYPE.DATA_SAVE_PENDING,
    });

    try {
      await httpRequest({
        method: DELIVERY_PAYMENT_API.SAVE_DATA.TYPE,
        url: DELIVERY_PAYMENT_API.SAVE_DATA.ENDPOINT,
        data: { data: data },
      });

      dispatch({
        type: DELIVERY_PAYMENT_ACTION_TYPE.DATA_SAVE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: DELIVERY_PAYMENT_ACTION_TYPE.DATA_SAVE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getDataAction() {
  return async (dispatch) => {
    dispatch({
      type: DELIVERY_PAYMENT_ACTION_TYPE.DATA_GET_PENDING,
    });

    try {
      const response = await httpRequest({
        method: DELIVERY_PAYMENT_API.GET_DATA.TYPE,
        url: DELIVERY_PAYMENT_API.GET_DATA.ENDPOINT,
      });
      dispatch({
        type: DELIVERY_PAYMENT_ACTION_TYPE.DATA_GET_SUCCESS,
        data: response.data?.data || [],
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: DELIVERY_PAYMENT_ACTION_TYPE.DATA_GET_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
