import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { PATTERNS_ACTION_TYPE } from './patterns.type';

const initialState = {
  patternsState: initRequestState({
    products: [],
    currentPage: 1,
    totalRecords: 0,
  }),
  categories: initRequestState(),
};

export function patternsStore(state = initialState, action) {
  switch (action.type) {
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING:
      return {
        ...state,
        patternsState: setRequestPending(state.patternsState),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS:
      const oldProducts = state.patternsState.data.products;
      const newProducts = action.data.products;
      const totalRecords = action.data.totalRecords;
      const prevCurrentPage = state.patternsState.data.currentPage;
      return {
        ...state,
        patternsState: setRequestSuccess(
          state.patternsState,
          {
            products: [...oldProducts, ...newProducts],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
        ),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_ERROR:
      return {
        ...state,
        patternsState: setRequestError(
          state.patternsState,
          action.errorMessage,
        ),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_PENDING:
      return {
        ...state,
        patternsState: setRequestPending(state.patternsState),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_SUCCESS:
      return {
        ...state,
        patternsState: setRequestSuccess(state.patternsState),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPDATE_ERROR:
      return {
        ...state,
        patternsState: setRequestError(
          state.patternsState,
          action.errorMessage,
        ),
      };
    case PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING:
      return {
        ...state,
        categories: setRequestPending(state.categories),
      };
    case PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS:
      return {
        ...state,
        categories: setRequestSuccess(
          state.categories,
          action.data,
        ),
      };
    case PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
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
