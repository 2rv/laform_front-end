import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MY_PATTERNS_ACTION_TYPE } from './my-patterns.type';

const initialState = {
  myPatterns: initRequestState(),
};

export function myPatternsStore(state = initialState, action) {
  switch (action.type) {
    case MY_PATTERNS_ACTION_TYPE.MY_PATTERNS_UPLOAD_PENDING:
      return {
        ...state,
        myPatterns: setRequestPending(state.myPatterns),
      };
    case MY_PATTERNS_ACTION_TYPE.MY_PATTERNS_UPLOAD_SUCCESS:
      return {
        ...state,
        myPatterns: setRequestSuccess(state.myPatterns),
      };
    case MY_PATTERNS_ACTION_TYPE.MY_PATTERNS_UPLOAD_ERROR:
      return {
        ...state,
        myPatterns: setRequestError(state.myPatterns, action.errorMessage),
      };
    default:
      return state;
  }
}
