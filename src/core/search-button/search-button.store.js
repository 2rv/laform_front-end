import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { SEARCH_BUTTON_ACTION_TYPE } from './search-button.type';

const initialState = {
  masterClassState: initRequestState(),
  sewingGoodsState: initRequestState(),
  articlesState: initRequestState(),
  patternsState: initRequestState(),
};

export function searchButtonStore(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BUTTON_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING:
      return {
        ...state,
        masterClassState: setRequestPending(state.masterClassState),
      };
    case SEARCH_BUTTON_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS:
      return {
        ...state,
        masterClassState: setRequestSuccess(
          state.masterClassState,
          action.payload,
        ),
      };
    case SEARCH_BUTTON_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR:
      return {
        ...state,
        masterClassState: setRequestError(
          state.masterClassState,
          action.errorMessage,
        ),
      };
    case SEARCH_BUTTON_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        sewingGoodsState: setRequestPending(state.sewingGoodsState),
      };
    case SEARCH_BUTTON_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS:
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(
          state.sewingGoodsState,
          action.payload,
        ),
      };
    case SEARCH_BUTTON_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR:
      return {
        ...state,
        sewingGoodsState: setRequestError(
          state.sewingGoodsState,
          action.errorMessage,
        ),
      };
    case SEARCH_BUTTON_ACTION_TYPE.ARTICLES_UPLOAD_PENDING:
      return {
        ...state,
        articlesState: setRequestPending(state.articlesState),
      };
    case SEARCH_BUTTON_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS:
      return {
        ...state,
        articlesState: setRequestSuccess(state.articlesState, action.payload),
      };
    case SEARCH_BUTTON_ACTION_TYPE.ARTICLES_UPLOAD_ERROR:
      return {
        ...state,
        articlesState: setRequestError(
          state.articlesState,
          action.errorMessage,
        ),
      };
    case SEARCH_BUTTON_ACTION_TYPE.PATTERNS_UPLOAD_PENDING:
      return {
        ...state,
        patternsState: setRequestPending(state.patternsState),
      };
    case SEARCH_BUTTON_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS:
      return {
        ...state,
        patternsState: setRequestSuccess(state.patternsState, action.payload),
      };
    case SEARCH_BUTTON_ACTION_TYPE.PATTERNS_UPLOAD_ERROR:
      return {
        ...state,
        patternsState: setRequestError(
          state.patternsState,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
