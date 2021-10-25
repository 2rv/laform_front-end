import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { SEWING_GOODS_ACTION_TYPE } from './sewing-goods.type';

const initialState = {
  sewingGoodsState: initRequestState({
    products: [],
    currentPage: 1,
    totalRecords: 0,
  }),
  categories: initRequestState(),
};

export function sewingGoodsStore(state = initialState, action) {
  switch (action.type) {
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        sewingGoodsState: setRequestPending(state.sewingGoodsState),
      };
    case SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS:
      const oldProducts = state.sewingGoodsState.data.products;
      const newProducts = action.data.products;
      const totalRecords = action.data.totalRecords;
      const prevCurrentPage = state.sewingGoodsState.data.currentPage;
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(
          state.sewingGoodsState,
          {
            products: [...oldProducts, ...newProducts],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
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
    case SEWING_GOODS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING:
      return {
        ...state,
        categories: setRequestPending(state.categories),
      };
    case SEWING_GOODS_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS:
      return {
        ...state,
        categories: setRequestSuccess(
          state.categories,
          action.data,
        ),
      };
    case SEWING_GOODS_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
      return {
        ...state,
        categories: setRequestError(
          state.categories,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
