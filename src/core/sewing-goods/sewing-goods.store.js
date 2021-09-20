import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';

const initialState = {
  sewingGoodsState: initRequestState(),
};

export function sewingGoodsStore(state = initialState, action) {
  switch (action.type) {
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        sewingGoodsState: setRequestPending(state.sewingGoodsState),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS:
      const oldProducts = state.sewingGoodsState?.data?.products || [];
      const newProducts = action.payload.products || [];
      const totalRecords = action.payload.totalRecords || 0;
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(
          state.sewingGoodsState,
          { products: [...oldProducts, ...newProducts], totalRecords },
        ),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR:
      return {
        ...state,
        sewingGoodsState: setRequestError(
          state.sewingGoodsState,
          action.errorMessage,
        ),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_PENDING:
      return {
        ...state,
        sewingGoodsState: setRequestPending(state.sewingGoodsState),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_SUCCESS:
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(state.sewingGoodsState),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPDATE_ERROR:
      return {
        ...state,
        sewingGoodsState: setRequestError(
          state.sewingGoodsState,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
