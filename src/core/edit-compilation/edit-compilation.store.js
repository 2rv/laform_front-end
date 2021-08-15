import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { EDIT_COMPILATION_ACTION_TYPE } from './edit-compilation.type';

const initialState = {
  bestArticles: initRequestState(),
  bestMasterClasses: initRequestState(),
  bestProducts: initRequestState(),
};

export function editCompilationStore(state = initialState, action) {
  switch (action.type) {
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING:
      return {
        ...state,
        bestArticles: setRequestPending(state.bestArticles),
        bestMasterClasses: setRequestPending(state.bestMasterClasses),
        bestProducts: setRequestPending(state.bestProducts),
      };
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS:
      return {
        ...state,
        bestArticles: setRequestSuccess(state.bestArticles, action.bestArticles),
        bestMasterClasses: setRequestSuccess(state.bestMasterClasses, action.bestMasterClasses),
        bestProducts: setRequestSuccess(state.bestProducts, action.bestProducts),
      };
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR:
      return {
        ...state,
        bestArticles: setRequestError(state.bestArticles, action.errorMessage),
        bestMasterClasses: setRequestError(state.bestMasterClasses, action.errorMessage),
        bestProducts: setRequestError(state.bestProducts, action.errorMessage),
      };
    default:
      return state;
  }
}
