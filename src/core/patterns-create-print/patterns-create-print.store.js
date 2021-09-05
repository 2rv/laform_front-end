import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_PRINT_PATTERN_ACTION_TYPE } from './patterns-create-print.type';

const initialState = {
  createPrintPattern: initRequestState(),
};

export function createPrintPatternStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRINT_PATTERN_ACTION_TYPE.CREATE_PRINT_PATTERN_UPLOAD_PENDING:
      return {
        ...state,
        createPrintPattern: setRequestPending(state.createPrintPattern),
      };
    case CREATE_PRINT_PATTERN_ACTION_TYPE.CREATE_PRINT_PATTERN_UPLOAD_SUCCESS:
      return {
        ...state,
        createPrintPattern: setRequestSuccess(state.createPrintPattern),
      };
    case CREATE_PRINT_PATTERN_ACTION_TYPE.CREATE_PRINT_PATTERN_UPLOAD_ERROR:
      return {
        ...state,
        createPrintPattern: setRequestError(
          state.createPrintPattern,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
