import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { CREATE_PRODUCT_ACTION_TYPE } from './create-product.type';

const initialState = {
  createProduct: initRequestState(),
};

export function createProductStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_PENDING:
      return {
        ...state,
        createProduct: setRequestPending(state.createProduct),
      };
    case CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_SUCCESS:
      return {
        ...state,
        createProduct: setRequestSuccess(state.createProduct),
      };
    case CREATE_PRODUCT_ACTION_TYPE.CREATE_PRODUCT_UPLOAD_ERROR:
      return {
        ...state,
        createProduct: setRequestError(state.createProduct, action.errorMessage),
      };
    default:
      return state;
  }
}
