import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { MASTER_CLASS_PAGE_ACTION_TYPE } from './master-class-page.type';

const initialState = {
  masterClass: initRequestState(),
};

export function masterClassPageStore(state = initialState, action) {
  switch (action.type) {
    case MASTER_CLASS_PAGE_ACTION_TYPE.MASTER_CLASS_DATA_UPLOAD_PENDING:
      return {
        ...state,
        masterClass: setRequestPending(state.masterClass),
      };
    case MASTER_CLASS_PAGE_ACTION_TYPE.MASTER_CLASS_DATA_UPLOAD_SUCCESS:
      return {
        ...state,
        masterClass: setRequestSuccess(state.masterClass, action.data),
      };
    case MASTER_CLASS_PAGE_ACTION_TYPE.MASTER_CLASS_DATA_UPLOAD_ERROR:
      return {
        ...state,
        masterClass: setRequestError(state.masterClass, action.errorMessage),
      };
    default:
      return state;
  }
}
