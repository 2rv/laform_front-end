import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { SEWING_GOODS_PRODUCT_ACTION_TYPE } from './sewing-goods-product.type';

const initialState = {
  product: initRequestState(),
};

export function sewingGoodsProductStore(state = initialState, action) {
  switch (action.type) {
    case SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product, action.data),
      };
    case SEWING_GOODS_PRODUCT_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPLOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };
    default:
      return state;
  }
}
