import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { EDIT_COMPILATION_ACTION_TYPE } from './edit-compilation.type';

const initialProductData = {
  products: [],
  currentPage: 1,
  totalRecords: 0,
};

const initialState = {
  bestArticles: initRequestState(),
  bestMasterClasses: initRequestState(),
  bestProducts: initRequestState(),
  products: initRequestState(initialProductData),
};

export function editCompilationStore(state = initialState, action) {
  switch (action.type) {
    case EDIT_COMPILATION_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        products: initRequestState(initialProductData),
      };
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_PENDING:
      return {
        ...state,
        bestArticles: setRequestPending(state.bestArticles),
        bestMasterClasses: setRequestPending(state.bestMasterClasses),
        bestProducts: setRequestPending(state.bestProducts),
      };
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_SUCCESS:
      return {
        ...state,
        bestArticles: setRequestSuccess(state.bestArticles, action.bestArticles),
        bestMasterClasses: setRequestSuccess(state.bestMasterClasses, action.bestMasterClasses),
        bestProducts: setRequestSuccess(state.bestProducts, action.bestProducts),
      };
    case EDIT_COMPILATION_ACTION_TYPE.EDIT_COMPILATION_UPLOAD_ERROR:
      return {
        ...state,
        bestArticles: setRequestError(state.bestArticles, action.errorMessage),
        bestMasterClasses: setRequestError(state.bestMasterClasses, action.errorMessage),
        bestProducts: setRequestError(state.bestProducts, action.errorMessage),
      };
    case EDIT_COMPILATION_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case EDIT_COMPILATION_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS:
      const oldProducts = state.products.data.products;
      const newProducts = action.data.products;
      const totalRecords = action.data.totalRecords;
      const prevCurrentPage = state.products.data.currentPage;
      return {
        ...state,
        products: setRequestSuccess(
          state.products,
          {
            products: [...oldProducts, ...newProducts],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
        ),
      };
    case EDIT_COMPILATION_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR:
      return {
        ...state,
        products: setRequestError(state.products, action.errorMessage),
      };
    default:
      return state;
  }
}
