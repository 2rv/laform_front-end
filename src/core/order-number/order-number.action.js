import { httpRequest } from '../../main/http';
import { ORDER_NUMBER_API } from './order-number.constant';
import { ORDER_NUMBER_ACTION_TYPE } from './order-number.type';
import {
  convertPurchaseInfo,
  convertPurchaseProducts,
  convertChangePurchaseProducts,
  convertForUpdate,
} from './order-number.ts.convert';

export function orderNumberUploadData(orderId) {
  return async (dispatch) => {
    dispatch({
      type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: ORDER_NUMBER_API.ORDER_NUMBER_UPLOAD.TYPE,
        url: ORDER_NUMBER_API.ORDER_NUMBER_UPLOAD.ENDPOINT(orderId),
      });
      const { purchaseProducts, ...purchaseInfo } = response.data;
      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_SUCCESS,
        data: convertPurchaseInfo(purchaseInfo),
      });
      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_PRODUCT_INIT,
        data: convertPurchaseProducts(purchaseProducts),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updatePurchaseOrderStatus(orderId, values, products) {
  return async (dispatch) => {
    dispatch({
      type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPDATE_PENDING,
    });
    try {
      convertForUpdate(values, products);
      //   await httpRequest({
      //     method: ORDER_NUMBER_API.UPDATE_PURCHASE_STATUS.TYPE,
      //     url: ORDER_NUMBER_API.UPDATE_PURCHASE_STATUS.ENDPOINT(orderId),
      //     data: ,
      //   });

      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPDATE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function changeProductAction(values, products) {
  return async (dispatch) => {
    try {
      const result = convertChangePurchaseProducts(products, values);
      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_PRODUCT_CHANGE,
        data: convertPurchaseProducts(result),
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function deleteProductAction(values, products) {
  return async (dispatch) => {
    try {
      const result = products.filter((item) => item.id !== values.id);
      dispatch({
        type: ORDER_NUMBER_ACTION_TYPE.ORDER_PRODUCT_DELETE,
        data: convertPurchaseProducts(result),
      });
    } catch (err) {
      console.log(err);
    }
  };
}
