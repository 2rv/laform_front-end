import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_MASTER_CLASS_ACTION_TYPE } from './master-class-create.type';

const initialState = {
  createMasterClass: initRequestState(),
};

export function createMasterClassStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_PENDING:
      return {
        ...state,
        createMasterClass: setRequestPending(state.createMasterClass),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_SUCCESS:
      return {
        ...state,
        createMasterClass: setRequestSuccess(state.createMasterClass),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.CREATE_MASTER_CLASS_UPLOAD_ERROR:
      return {
        ...state,
        createMasterClass: setRequestError(
          state.createMasterClass,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
