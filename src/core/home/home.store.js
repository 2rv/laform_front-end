import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { HOME_ACTION_TYPE } from './home.type';

const initialState = {
  masterClassState: initRequestState(),
  sewingGoodsState: initRequestState(),
  articleState: initRequestState(),
};

export function homeStore(state = initialState, action) {
  switch (action.type) {
    case HOME_ACTION_TYPE.HOME_MASTER_CLASS_PENDING:
      return {
        ...state,
        masterClassState: setRequestPending(state.masterClassState),
      };
    case HOME_ACTION_TYPE.HOME_MASTER_CLASS_SUCCESS:
      return {
        ...state,
        masterClassState: setRequestSuccess(
          state.masterClassState,
          action.data,
        ),
      };
    case HOME_ACTION_TYPE.HOME_MASTER_CLASS_ERROR:
      return {
        ...state,
        masterClassState: setRequestError(
          state.masterClassState,
          action.errorMessage,
        ),
      };
    case HOME_ACTION_TYPE.HOME_SEWING_GOODS_PENDING:
      return {
        ...state,
        sewingGoodsState: setRequestPending(state.sewingGoodsState),
      };
    case HOME_ACTION_TYPE.HOME_SEWING_GOODS_SUCCESS:
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(
          state.sewingGoodsState,
          action.data,
        ),
      };
    case HOME_ACTION_TYPE.HOME_SEWING_GOODS_ERROR:
      return {
        ...state,
        sewingGoodsState: setRequestError(
          state.sewingGoodsState,
          action.errorMessage,
        ),
      };
    case HOME_ACTION_TYPE.HOME_ARTICLE_PENDING:
      return {
        ...state,
        articleState: setRequestPending(state.articleState),
      };
    case HOME_ACTION_TYPE.HOME_ARTICLE_SUCCESS:
      return {
        ...state,
        articleState: setRequestSuccess(state.articleState, action.data),
      };
    case HOME_ACTION_TYPE.HOME_ARTICLE_ERROR:
      return {
        ...state,
        articleState: setRequestError(state.articleState, action.errorMessage),
      };
    default:
      return state;
  }
}
