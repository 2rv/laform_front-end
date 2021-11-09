import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_SEWING_GOODS_ACTION_TYPE } from './sewing-goods-create.type';

const initialState = {
  createSewingGoods: initRequestState(),
  updateSewingGoods: initRequestState(),
  deleteSewingGoods: initRequestState(),
  product: initRequestState(),
};

export function createSewingGoodsStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_SEWING_GOODS_ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        createSewingGoods: setRequestPending(state.createSewingGoods),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_SUCCESS:
      return {
        ...state,
        createSewingGoods: setRequestSuccess(state.createSewingGoods),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.CREATE_SEWING_GOODS_UPLOAD_ERROR:
      return {
        ...state,
        createSewingGoods: setRequestError(
          state.createSewingGoods,
          action.errorMessage,
        ),
      };

    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_LOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product, action.data),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_LOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };

    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPDATE_PENDING:
      return {
        ...state,
        updateSewingGoods: setRequestPending(state.updateSewingGoods),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        updateSewingGoods: setRequestSuccess(state.updateSewingGoods),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_PRODUCT_UPDATE_ERROR:
      return {
        ...state,
        updateSewingGoods: setRequestError(
          state.updateSewingGoods,
          action.errorMessage,
        ),
      };

    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_DELETE_PENDING:
      return {
        ...state,
        deleteSewingGoods: setRequestPending(state.deleteSewingGoods),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_DELETE_SUCCESS:
      return {
        ...state,
        deleteSewingGoods: setRequestSuccess(state.deleteSewingGoods),
      };
    case CREATE_SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_DELETE_ERROR:
      return {
        ...state,
        deleteSewingGoods: setRequestError(state.deleteSewingGoods, action.errorMessage),
      };
    default:
      return state;
  }
}
