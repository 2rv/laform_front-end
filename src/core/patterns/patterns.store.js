import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { PATTERNS_ACTION_TYPE } from './patterns.type';

const initialState = {
  patternsState: initRequestState(),
};

export function patternsStore(state = initialState, action) {
  switch (action.type) {
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING:
      return {
        ...state,
        patternsState: setRequestPending(state.patternsState),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS:
      return {
        ...state,
        patternsState: setRequestSuccess(state.patternsState, action.data),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_ERROR:
      return {
        ...state,
        patternsState: setRequestError(
          state.patternsState,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
