import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { SEARCH_BUTTON_ACTION_TYPE } from './search-button.type';

const initialProductData = {
  products: [],
  currentPage: 0,
  totalRecords: 0,
};

const initialState = {
  products: initRequestState(initialProductData),
};

export function searchButtonStore(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BUTTON_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        products: initRequestState(initialProductData),
      };
    case SEARCH_BUTTON_ACTION_TYPE.PRODUCTS_UPLOAD_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case SEARCH_BUTTON_ACTION_TYPE.PRODUCTS_UPLOAD_SUCCESS:
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
    case SEARCH_BUTTON_ACTION_TYPE.PRODUCTS_UPLOAD_ERROR:
      return {
        ...state,
        products: setRequestError(
          state.products,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
}
