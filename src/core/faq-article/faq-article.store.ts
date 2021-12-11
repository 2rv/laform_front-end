import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from 'src/main/store/store.service';
import { FAQ_ARTICLE_ACTION_TYPE } from './faq-article.type';

const initialState = {
  load: initRequestState(),
  save: initRequestState(),
};

export function faqArticleStore(state = initialState, action: any) {
  switch (action.type) {
    case FAQ_ARTICLE_ACTION_TYPE.DATA_RELOAD:
      return initialState;

    case FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_PENDING:
      return {
        ...state,
        load: setRequestPending(state.load),
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_SUCCESS:
      return {
        ...state,
        load: setRequestSuccess(state.load, action.data),
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_LOAD_ERROR:
      return {
        ...state,
        load: setRequestError(state.load, action.errorMessage),
      };

    case FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case FAQ_ARTICLE_ACTION_TYPE.DATA_SAVE_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    default:
      return state;
  }
}
