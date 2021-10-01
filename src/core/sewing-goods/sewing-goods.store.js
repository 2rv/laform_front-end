import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';

const initialState = {
  sewingGoodsState: initRequestState(null, {
    totalCount: 0,
    currentCount: 0,
  }),
};

export function sewingGoodsStore(state = initialState, action) {
  switch (action.type) {
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        sewingGoodsState: setRequestPending(state.sewingGoodsState),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS:
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(
          state.sewingGoodsState,
          action.data,
          action.count,
        ),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PAGINATION_SUCCESS:
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(
          state.sewingGoodsState,
          action.data.concat(state.sewingGoodsState?.data || []),
          action.count,
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
