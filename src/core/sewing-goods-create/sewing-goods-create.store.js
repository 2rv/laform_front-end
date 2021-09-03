import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_SEWING_GOODS__ACTION_TYPE } from './sewing-goods-create.type';

const initialState = {
  createSewingGoods: initRequestState(),
};

export function createSewingGoodsStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_SEWING_GOODS__ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        createSewingGoods: setRequestPending(state.createSewingGoods),
      };
    case CREATE_SEWING_GOODS__ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_SUCCESS:
      return {
        ...state,
        createSewingGoods: setRequestSuccess(state.createSewingGoods),
      };
    case CREATE_SEWING_GOODS__ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_ERROR:
      return {
        ...state,
        createSewingGoods: setRequestError(
          state.createSewingGoods,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
