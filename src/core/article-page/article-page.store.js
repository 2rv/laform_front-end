import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ARTICLE_PAGE_ACTION_TYPE } from './article-page.type';

const initialState = {
  articlePage: initRequestState(),
};

export function articlePageStore(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_PENDING:
      return {
        ...state,
        articlePage: setRequestPending(state.articlePage),
      };
    case ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        articlePage: setRequestSuccess(state.articlePage, action.data),
      };
    case ARTICLE_PAGE_ACTION_TYPE.ARTICLE_PAGE_UPLOAD_ERROR:
      return {
        ...state,
        articlePage: setRequestError(state.articlePage, action.errorMessage),
      };
    default:
      return state;
  }
}
