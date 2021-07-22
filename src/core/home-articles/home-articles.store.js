import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { HOME_ARTICLE_ACTION_TYPE } from './home-articles.type';

const initialState = {
  homeArticleList: initRequestState(),
};

export function homeArticleStore(state = initialState, action) {
  switch (action.type) {
    case HOME_ARTICLE_ACTION_TYPE.HOME_ARTICLE_LOAD_PENDING:
      return {
        ...state,
        homeArticleList: setRequestPending(state.homeArticleList),
      };

    case HOME_ARTICLE_ACTION_TYPE.HOME_ARTICLE_LOAD_SUCCESS:
      return {
        ...state,
        homeArticleList: setRequestSuccess(state.homeArticleList, action.data),
      };

    case HOME_ARTICLE_ACTION_TYPE.HOME_ARTICLE_LOAD_ERROR:
      return {
        ...state,
        homeArticleList: setRequestError(
          state.homeArticleList,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
