import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_PATTERN_ACTION_TYPE } from './pattern-create.type';

const initialState = {
  createPattern: initRequestState(),
  updatePattern: initRequestState(),
  deletePattern: initRequestState(),
  product: initRequestState(),
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

    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_LOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product, action.data),
      };
    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_LOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };

    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_UPDATE_PENDING:
      return {
        ...state,
        updatePattern: setRequestPending(state.updatePattern),
      };
    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        updatePattern: setRequestSuccess(state.updatePattern),
      };
    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_UPDATE_ERROR:
      return {
        ...state,
        updatePattern: setRequestError(
          state.updatePattern,
          action.errorMessage,
        ),
      };

    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_DELETE_PENDING:
      return {
        ...state,
        deletePattern: setRequestPending(state.deletePattern),
      };
    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        deletePattern: setRequestSuccess(state.deletePattern),
      };
    case CREATE_PATTERN_ACTION_TYPE.PATTERN_PRODUCT_DELETE_ERROR:
      return {
        ...state,
        deletePattern: setRequestError(state.deletePattern, action.errorMessage),
      };
    default:
      return state;
  }
}
