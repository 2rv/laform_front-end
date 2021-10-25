import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { MASTER_CLASSES_ACTION_TYPE } from './master-classes.type';

const initialProductData = {
  products: [],
  currentPage: 1,
  totalRecords: 0,
};

const initialState = {
  masterClassState: initRequestState(initialProductData),
  categories: initRequestState(),
};

export function masterClassesStore(state = initialState, action) {
  switch (action.type) {
    case MASTER_CLASSES_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        masterClassState: initRequestState(initialProductData),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_PENDING:
      return {
        ...state,
        masterClassState: setRequestPending(state.masterClassState),
      };
    case MASTER_CLASSES_ACTION_TYPE.MASTER_CLASSES_UPLOAD_SUCCESS:
      const oldProducts = state.masterClassState.data.products;
      const newProducts = action.data.products;
      const totalRecords = action.data.totalRecords;
      const prevCurrentPage = state.masterClassState.data.currentPage;
      return {
        ...state,
        masterClassState: setRequestSuccess(
          state.masterClassState,
          {
            products: [...oldProducts, ...newProducts],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
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
