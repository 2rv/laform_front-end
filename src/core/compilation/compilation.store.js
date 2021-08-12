import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { COMPILATION_ACTION_TYPE } from './compilation.type';

const initialState = {
  compilation: initRequestState(),
};

export function compilationStore(state = initialState, action) {
  switch (action.type) {
    case COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_PENDING:
      return {
        ...state,
        compilation: setRequestPending(state.compilation),
      };
    case COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_SUCCESS:
      return {
        ...state,
        compilation: setRequestSuccess(state.compilation),
      };
    case COMPILATION_ACTION_TYPE.COMPILATION_UPLOAD_ERROR:
      return {
        ...state,
        compilation: setRequestError(state.compilation, action.errorMessage),
      };
    default:
      return state;
  }
}
