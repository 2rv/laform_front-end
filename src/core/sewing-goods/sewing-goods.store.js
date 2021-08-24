import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';

const initialState = {
  sewingGoods: initRequestState(),
};

export function sewingGoodsStore(state = initialState, action) {
  switch (action.type) {
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        sewingGoods: setRequestPending(state.sewingGoods),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS:
      return {
        ...state,
        sewingGoods: setRequestSuccess(state.sewingGoods),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR:
      return {
        ...state,
        sewingGoods: setRequestError(state.sewingGoods, action.errorMessage),
      };
    default:
      return state;
  }
}
