import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { RECOMENDATION_ACTION_TYPE } from './recomendation.type';

const initialState = {
  masterClassState: initRequestState(),
  sewingGoodsState: initRequestState(),
  articlesState: initRequestState(),
  patternsState: initRequestState(),
};

export function recomendationStore(state = initialState, action) {
  switch (action.type) {
    case RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING:
      return {
        ...state,
        masterClassState: setRequestPending(state.masterClassState),
      };
    case RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS:
      return {
        ...state,
        masterClassState: setRequestSuccess(
          state.masterClassState,
          action.data,
        ),
      };
    case RECOMENDATION_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR:
      return {
        ...state,
        masterClassState: setRequestError(
          state.masterClassState,
          action.errorMessage,
        ),
      };
    case RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING:
      return {
        ...state,
        sewingGoodsState: setRequestPending(state.sewingGoodsState),
      };
    case RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS:
      return {
        ...state,
        sewingGoodsState: setRequestSuccess(
          state.sewingGoodsState,
          action.data,
        ),
      };
    case RECOMENDATION_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR:
      return {
        ...state,
        sewingGoodsState: setRequestError(
          state.sewingGoodsState,
          action.errorMessage,
        ),
      };
    case RECOMENDATION_ACTION_TYPE.ARTICLES_UPLOAD_PENDING:
      return {
        ...state,
        articlesState: setRequestPending(state.articlesState),
      };
    case RECOMENDATION_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS:
      return {
        ...state,
        articlesState: setRequestSuccess(state.articlesState, action.data),
      };
    case RECOMENDATION_ACTION_TYPE.ARTICLES_UPLOAD_ERROR:
      return {
        ...state,
        articlesState: setRequestError(
          state.articlesState,
          action.errorMessage,
        ),
      };
    case RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_PENDING:
      return {
        ...state,
        patternsState: setRequestPending(state.patternsState),
      };
    case RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS:
      return {
        ...state,
        patternsState: setRequestSuccess(state.patternsState, action.data),
      };
    case RECOMENDATION_ACTION_TYPE.PATTERNS_UPLOAD_ERROR:
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
