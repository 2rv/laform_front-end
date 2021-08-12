import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { PRODUCT_ACTION_TYPE } from './product.type';

const initialState = {
  product: initRequestState(),
};

export function productStore(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ACTION_TYPE.PRODUCT_UPLOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case PRODUCT_ACTION_TYPE.PRODUCT_UPLOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product),
      };
    case PRODUCT_ACTION_TYPE.PRODUCT_UPLOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };
    default:
      return state;
  }
}
