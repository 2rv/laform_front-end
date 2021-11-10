import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { PRODUCT_SELECTIONS_ACTION_TYPE } from './product-selections.type';

const initialState = {
  productsState: initRequestState(),
  compilationUpload: initRequestState(),
};

export function productSelectionsStore(state = initialState, action: any) {
  switch (action.type) {
    case PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_PENDING:
      return {
        ...state,
        productsState: setRequestPending(state.productsState),
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_SUCCESS:
      return {
        ...state,
        productsState: setRequestSuccess(state.productsState, action.data),
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_LOAD_ERROR:
      return {
        ...state,
        productsState: setRequestError(
          state.productsState,
          action.errorMessage,
        ),
      };

    case PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING:
      return {
        ...state,
        compilationUpload: setRequestPending(state.compilationUpload),
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS:
      return {
        ...state,
        compilationUpload: setRequestSuccess(
          state.compilationUpload,
          action.data,
        ),
      };
    case PRODUCT_SELECTIONS_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR:
      return {
        ...state,
        compilationUpload: setRequestError(
          state.compilationUpload,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
