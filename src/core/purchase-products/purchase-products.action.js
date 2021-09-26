import { httpRequest } from '../../main/http';
import { PURCHASE_PRODUCTS_API } from './purchase-products.constant';
import { PURCHASE_PRODUCTS_ACTION_TYPE } from './purchase-products.type';
import { performPurchaseProduct } from './purchase-products.convert';

export function purchaseProductLoadData(data) {
  return async (dispatch) => {
    dispatch({
      type: PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: PURCHASE_PRODUCTS_API.LOAD_DATA.METHOD,
        url: PURCHASE_PRODUCTS_API.LOAD_DATA.ENDPOINT,
        data,
      });
      const data = performPurchaseProduct(res.data);

      dispatch({
        type: PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_SUCCESS,
        data: data,
      });
    } catch (err) {
      console.log(err);
      if (err.response) {
        dispatch({
          type: PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
