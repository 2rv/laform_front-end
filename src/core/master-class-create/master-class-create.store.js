import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_MASTER_CLASS_ACTION_TYPE } from './master-class-create.type';

const initialState = {
  createMasterClass: initRequestState(),
  product: initRequestState(),
  updateMasterClass: initRequestState(),
  deleteMasterClass: initRequestState(),
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

    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_LOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_LOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product, action.data),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_LOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };

    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPDATE_PENDING:
      return {
        ...state,
        updateMasterClass: setRequestPending(state.updateMasterClass),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPDATE_SUCCESS:
      return {
        ...state,
        updateMasterClass: setRequestSuccess(state.updateMasterClass),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_UPDATE_ERROR:
      return {
        ...state,
        updateMasterClass: setRequestError(
          state.updateMasterClass,
          action.errorMessage,
        ),
      };

    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_DELETE_PENDING:
      return {
        ...state,
        deleteMasterClass: setRequestPending(state.deleteMasterClass),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_DELETE_SUCCESS:
      return {
        ...state,
        deleteMasterClass: setRequestSuccess(state.deleteMasterClass),
      };
    case CREATE_MASTER_CLASS_ACTION_TYPE.MASTER_CLASS_DELETE_ERROR:
      return {
        ...state,
        deleteMasterClass: setRequestError(state.deleteMasterClass, action.errorMessage),
      };
    default:
      return state;
  }
}
