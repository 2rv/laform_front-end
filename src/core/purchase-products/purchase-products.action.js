import { httpRequest } from '../../main/http';
import { PURCHASE_PRODUCTS_API } from './purchase-products.constant';
import { PURCHASE_PRODUCTS_ACTION_TYPE } from './purchase-products.type';
import { convertForTable } from './purchase-products.ts.convert';
import { PURCHASE_PRODUCTS_STORE_NAME } from './purchase-products.constant';

export function purchaseProductLoadData() {
  return async (dispatch) => {
    dispatch({
      type: PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: PURCHASE_PRODUCTS_API.LOAD_DATA.METHOD,
        url: PURCHASE_PRODUCTS_API.LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_SUCCESS,
        data: convertForTable(res.data[0]),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
