import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';

const initialState = {
  masterClasses: initRequestState(),
};

export function masterClassesStore(state = initialState, action) {
  switch (action.type) {
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING:
      return {
        ...state,
        masterClasses: setRequestPending(state.masterClasses),
      };

    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS:
      return {
        ...state,
        masterClasses: setRequestSuccess(
          state.masterClasses,
          action.masterClasses,
        ),
      };

    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR:
      return {
        ...state,
        masterClasses: setRequestError(
          state.masterClasses,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
