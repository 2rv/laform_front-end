import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MASTER_CLASS_ACTION_TYPE } from './master-class.type';

const initialState = {
  masterClass: initRequestState(),
};

export function masterClassStore(state = initialState, action) {
  switch (action.type) {
    case MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPLOAD_PENDING:
      return {
        ...state,
        masterClass: setRequestPending(state.masterClass),
      };

    case MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPLOAD_SUCCESS:
      return {
        ...state,
        masterClass: setRequestSuccess(state.masterClass, action.masterClass),
      };

    case MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPLOAD_ERROR:
      return {
        ...state,
        masterClass: setRequestError(
          state.masterClass,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
