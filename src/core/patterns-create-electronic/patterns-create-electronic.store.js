import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_ELECTRONIC_PATTERN_TYPE } from './patterns-create-electronic.type';

const initialState = {
  createElectronicPattern: initRequestState(),
};

export function createElectronicPatternStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_PENDING:
      return {
        ...state,
        createElectronicPattern: setRequestPending(
          state.createElectronicPattern,
        ),
      };
    case CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_SUCCESS:
      return {
        ...state,
        createElectronicPattern: setRequestSuccess(
          state.createElectronicPattern,
        ),
      };
    case CREATE_ELECTRONIC_PATTERN_TYPE.CREATE_ELECTRONIC_PATTERN_UPLOAD_ERROR:
      return {
        ...state,
        createElectronicPattern: setRequestError(
          state.createElectronicPattern,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
