import { httpRequest } from '../../main/http';
import { DELIVERY_PRICE_PAGE_API } from './delivery-price-page.constant';
import { DELIVERY_PRICE_PAGE_ACTION_TYPE } from './delivery-price-page.type';

export function createDeliveryPrice(data) {
  return async (dispatch) => {
    dispatch({
      type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: DELIVERY_PRICE_PAGE_API.CREATE_DELIVERY_PRICE.TYPE,
        url: DELIVERY_PRICE_PAGE_API.CREATE_DELIVERY_PRICE.ENDPOINT,
        data,
      });

      dispatch({
        type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_SUCCESS,
      });
      dispatch(fetchDeliveryPriceData());
    } catch (err) {
      if (err.response) {
        dispatch({
          type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function fetchDeliveryPriceData() {
  return async (dispatch) => {
    dispatch({
      type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: DELIVERY_PRICE_PAGE_API.FETCH_ALL.TYPE,
        url: DELIVERY_PRICE_PAGE_API.FETCH_ALL.ENDPOINT,
      });

      dispatch({
        type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function removeDeliveryPrice(id) {
  return async (dispatch) => {
    dispatch({
      type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: DELIVERY_PRICE_PAGE_API.REMOVE_DELIVERY_PRICE.TYPE,
        url: DELIVERY_PRICE_PAGE_API.REMOVE_DELIVERY_PRICE.ENDPOINT(id),
      });

      dispatch({
        type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_SUCCESS,
      });
      dispatch(fetchDeliveryPriceData());
    } catch (err) {
      if (err.response) {
        dispatch({
          type: DELIVERY_PRICE_PAGE_ACTION_TYPE.DELIVERY_PRICE_PAGE_DATA_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
