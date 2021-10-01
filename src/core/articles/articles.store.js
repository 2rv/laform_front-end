import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ARTICLES_ACTION_TYPE } from './articles.type';

const initialState = {
  articlesState: initRequestState(null, {
    totalCount: 0,
    currentCount: 0,
  }),
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
        articlesState: setRequestSuccess(
          state.articlesState,
          action.data,
          action.count,
        ),
      };

    case ARTICLES_ACTION_TYPE.ARTICLES_PAGINATION_SUCCESS:
      return {
        ...state,
        articlesState: setRequestSuccess(
          state.articlesState,
          action.data.concat(state.articlesState?.data || []),
          action.count,
        ),
      };
    case ARTICLES_ACTION_TYPE.ARTICLES_UPLOAD_ERROR:
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
