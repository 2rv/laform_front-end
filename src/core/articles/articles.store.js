import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ARTICLES_ACTION_TYPE } from './articles.type';

const initialState = {
  articlesState: initRequestState(),
  categories: initRequestState(),
};

export function articlesStore(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_PENDING:
      return {
        ...state,
        articlesState: setRequestPending(state.articlesState),
      };
    case ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS:
      return {
        ...state,
        articlesState: setRequestSuccess(state.articlesState, action.data),
      };
    case ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_ERROR:
      return {
        ...state,
        articlesState: setRequestError(
          state.articlesState,
          action.errorMessage,
        ),
      };
    case ARTICLES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING:
      return {
        ...state,
        categories: setRequestPending(state.categories),
      };
    case ARTICLES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS:
      return {
        ...state,
        categories: setRequestSuccess(
          state.categories,
          action.data,
        ),
      };
    case ARTICLES_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
      return {
        ...state,
        categories: setRequestError(
          state.categories,
          action.errorMessage,
        ),
      };
    case ARTICLES_ACTION_TYPE.REMOVE_ARTICLE_PENDING:
      return {
        ...state,
        articlesState: setRequestPending(state.articlesState),
      };
    case ARTICLES_ACTION_TYPE.REMOVE_ARTICLE_SUCCESS:
      return {
        ...state,
        articlesState: setRequestSuccess(state.articlesState),
      };
    case ARTICLES_ACTION_TYPE.REMOVE_ARTICLE_ERROR:
      return {
        ...state,
        articlesState: setRequestError(
          state.articlesState,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
