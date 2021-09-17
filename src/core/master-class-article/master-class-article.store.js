import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MASTER_CLASS_ARTICLE_ACTION_TYPE } from './master-class-article.type';

const initialState = {
  masterClassArticle: initRequestState(),
};

export function masterClassArticleStore(state = initialState, action) {
  switch (action.type) {
    case MASTER_CLASS_ARTICLE_ACTION_TYPE.MASTER_CLASS_ARTICLE_UPLOAD_PENDING:
      return {
        ...state,
        masterClassArticle: setRequestPending(state.masterClassArticle),
      };
    case MASTER_CLASS_ARTICLE_ACTION_TYPE.MASTER_CLASS_ARTICLE_UPLOAD_SUCCESS:
      return {
        ...state,
        masterClassArticle: setRequestSuccess(state.masterClassArticle, action.data),
      };
    case MASTER_CLASS_ARTICLE_ACTION_TYPE.MASTER_CLASS_ARTICLE_UPLOAD_ERROR:
      return {
        ...state,
        masterClassArticle: setRequestError(state.masterClassArticle, action.errorMessage),
      };
    default:
      return state;
  }
}
