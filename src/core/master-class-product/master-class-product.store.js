import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { MASTER_CLASS_PRODUCT_ACTION_TYPE } from './master-class-product.type';

const initialState = {
  product: initRequestState(),
};

export function masterClassProductStore(state = initialState, action) {
  switch (action.type) {
    case MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product, action.data),
      };
    case MASTER_CLASS_PRODUCT_ACTION_TYPE.MASTER_CLASS_PRODUCT_UPLOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };
    default:
      return state;
  }
}
