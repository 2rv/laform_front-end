import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { PURCHASE_PRODUCTS_ACTION_TYPE } from './purchase-products.type';

const initialState = {
  purchaseProductsLoadData: initRequestState(),
};

export function purchaseProductsStore(state = initialState, action) {
  switch (action.type) {
    case PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_PENDING:
      return {
        ...state,
        purchaseProductsLoadData: setRequestPending(
          state.purchaseProductsLoadData,
        ),
      };

    case PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_SUCCESS:
      return {
        ...state,
        purchaseProductsLoadData: setRequestSuccess(
          state.purchaseProductsLoadData,
          action.data,
        ),
      };

    case PURCHASE_PRODUCTS_ACTION_TYPE.PURCHASE_PRODUCTS_DATA_LOAD_ERROR:
      return {
        ...state,
        purchaseProductsLoadData: setRequestError(
          state.purchaseProductsLoadData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
