import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { PATTERNS_ACTION_TYPE } from './patterns.type';

const initialState = {
  patterns: initRequestState(),
};

export function patternsStore(state = initialState, action) {
  switch (action.type) {
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING:
      return {
        ...state,
        patterns: setRequestPending(state.patterns),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS:
      return {
        ...state,
        patterns: setRequestSuccess(state.patterns),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_ERROR:
      return {
        ...state,
        patterns: setRequestError(state.patterns, action.errorMessage),
      };
    default:
      return state;
  }
}
