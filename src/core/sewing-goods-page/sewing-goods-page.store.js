import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { SEWING_GOODS_PAGE_ACTION_TYPE } from './sewing-goods-page.type';

const initialState = {
  product: initRequestState(),
};

export function sewingGoodsPageStore(state = initialState, action) {
  switch (action.type) {
    case SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product),
      };
    case SEWING_GOODS_PAGE_ACTION_TYPE.SEWING_GOODS_PAGE_UPLOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };
    default:
      return state;
  }
}
