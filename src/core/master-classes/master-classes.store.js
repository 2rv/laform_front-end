import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';

const initialState = {
  masterClassState: initRequestState(null, {
    totalCount: 0,
    currentCount: 0,
  }),
};

export function masterClassesStore(state = initialState, action) {
  switch (action.type) {
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING:
      return {
        ...state,
        masterClassState: setRequestPending(state.masterClassState),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS:
      return {
        ...state,
        masterClassState: setRequestSuccess(
          state.masterClassState,
          action.data,
          action.count,
        ),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_PAGINATION_SUCCESS:
      return {
        ...state,
        masterClassState: setRequestSuccess(
          state.masterClassState,
          action.data.concat(state.masterClassState?.data || []),
          action.count,
        ),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_ERROR:
      return {
        ...state,
        masterClassState: setRequestError(
          state.masterClassState,
          action.errorMessage,
        ),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPDATE_PENDING:
      return {
        ...state,
        masterClassState: setRequestPending(state.masterClassState),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPDATE_SUCCESS:
      return {
        ...state,
        masterClassState: setRequestSuccess(state.masterClassState),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPDATE_ERROR:
      return {
        ...state,
        masterClassState: setRequestError(
          state.masterClassState,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
