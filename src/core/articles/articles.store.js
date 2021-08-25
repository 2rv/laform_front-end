import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ARTICLES_ACTION_TYPE } from './articles.type';

const initialState = {
  articlesState: initRequestState(),
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
    default:
      return state;
  }
}
