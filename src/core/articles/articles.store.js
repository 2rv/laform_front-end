import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ARTICLES_ACTION_TYPE } from './articles.type';

const initialState = {
  articles: initRequestState(),
};

export function articlesStore(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_PENDING:
      return {
        ...state,
        articles: setRequestPending(state.articles),
      };
    case ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_SUCCESS:
      return {
        ...state,
        articles: setRequestSuccess(state.articles),
      };
    case ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_ERROR:
      return {
        ...state,
        articles: setRequestError(state.articles, action.errorMessage),
      };
    default:
      return state;
  }
}
