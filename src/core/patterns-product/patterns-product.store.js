import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { PATTERNS_PRODUCT_ACTION_TYPE } from './patterns-product.type';

const initialState = {
  product: initRequestState(),
};

export function patternsProductStore(state = initialState, action) {
  switch (action.type) {
    case PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product),
      };
    case PATTERNS_PRODUCT_ACTION_TYPE.PATTERNS_PRODUCT_UPLOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };
    default:
      return state;
  }
}
