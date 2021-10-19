import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_PATTERN_ACTION_TYPE } from './pattern-create.type';

const initialState = {
  createPattern: initRequestState(),
};

export function createPatternStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_PENDING:
      return {
        ...state,
        createPattern: setRequestPending(state.createPattern),
      };
    case CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_SUCCESS:
      return {
        ...state,
        createPattern: setRequestSuccess(state.createPattern),
      };
    case CREATE_PATTERN_ACTION_TYPE.CREATE_PATTERN_UPLOAD_ERROR:
      return {
        ...state,
        createPattern: setRequestError(
          state.createPattern,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
