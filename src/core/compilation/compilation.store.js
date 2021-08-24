import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { COMPILATION_ACTION_TYPE } from './compilation.type';

const initialState = {
  products: initRequestState(),
  masterClasses: initRequestState(),
  articles: initRequestState(),
};

export function compilationStore(state = initialState, action) {
  switch (action.type) {
    case COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
        masterClasses: setRequestPending(state.masterClasses),
        articles: setRequestPending(state.articles),
      };
    case COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS:
      return {
        ...state,
        products: setRequestSuccess(state.products, action.products),
        masterClasses: setRequestSuccess(state.masterClasses, action.masterClasses),
        articles: setRequestSuccess(state.articles, action.articles),
      };
    case COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR:
      return {
        ...state,
        products: setRequestError(state.products, action.errorMessage),
        masterClasses: setRequestError(state.masterClasses, action.errorMessage),
        articles: setRequestError(state.articles, action.errorMessage),
      };
    default:
      return state;
  }
}
