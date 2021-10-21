import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';

const initialState = {
  masterClassState: initRequestState(),
  categories: initRequestState(),
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

    case MASTER_CLASSES_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING:
      return {
        ...state,
        categories: setRequestPending(state.categories),
      };
    case MASTER_CLASSES_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS:
      return {
        ...state,
        categories: setRequestSuccess(
          state.categories,
          action.data,
        ),
      };
    case MASTER_CLASSES_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
      return {
        ...state,
        categories: setRequestError(
          state.categories,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
