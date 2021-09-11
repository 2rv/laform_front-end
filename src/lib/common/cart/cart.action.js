import { CART_ACTION_TYPE, CART_API } from './cart.constant';
import { httpRequest } from 'src/main/http';
import { performBasketLoadData } from '../../../core/basket';

import { convertAuthtorizedCartData } from './cart.convert';

export function addProduct(data, type, logged) {
  return async (dispatch) => {
    dispatch({ type: CART_ACTION_TYPE.ADD_PRODUCT_PENDING });
    try {
      if (logged) {
        const convertedData = convertAuthtorizedCartData(data, type);

        const res = await httpRequest({
          method: CART_API.ADD_PRODUCT.TYPE,
          url: CART_API.ADD_PRODUCT.ENDPOINT,
          data: convertedData,
        });

        dispatch({
          type: CART_ACTION_TYPE.ADD_PRODUCT_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: CART_ACTION_TYPE.ADD_PRODUCT_SUCCESS,
          payload: data,
        });
      }
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CART_ACTION_TYPE.ADD_PRODUCT_PENDING,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateProduct(id) {
  return (data) => {
    return async (dispatch) => {
      dispatch({ type: CART_ACTION_TYPE.CHANGE_PRODUCT_PENDING });
      try {
        // if (logged) {
        const res = await httpRequest({
          method: CART_API.CHANGE_PRODUCT.TYPE,
          url: CART_API.CHANGE_PRODUCT.ENDPOINT(id),
          data: data,
        });

        dispatch({
          type: CART_ACTION_TYPE.CHANGE_PRODUCT_SUCCESS,
        });
        // } else {
        //   dispatch({
        //     type: CART_ACTION_TYPE.ADD_PRODUCT_SUCCESS,
        //     payload: data,
        //   });
        // }
      } catch (err) {
        if (err.response) {
          dispatch({
            type: CART_ACTION_TYPE.CHANGE_PRODUCT_ERROR,
            errorMessage: err.response.data.message,
          });
        }
      }
    };
  };
}

export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch({ type: CART_ACTION_TYPE.DELETE_PRODUCT_PENDING });
    try {
      const res = await httpRequest({
        method: CART_API.DELETE_PRODUCT.TYPE,
        url: CART_API.DELETE_PRODUCT.ENDPOINT(id),
      });

      dispatch({
        type: CART_ACTION_TYPE.DELETE_PRODUCT_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CART_ACTION_TYPE.DELETE_PRODUCT_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function getBasket() {
  return async (dispatch) => {
    dispatch({ type: CART_ACTION_TYPE.GET_BASKET_PENDING });
    try {
      const res = await httpRequest({
        method: CART_API.GET_BASKET.TYPE,
        url: CART_API.GET_BASKET.ENDPOINT,
      });
      const data = performBasketLoadData(res.data);
      dispatch({
        type: CART_ACTION_TYPE.GET_BASKET_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch({
          type: CART_ACTION_TYPE.GET_BASKET_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
