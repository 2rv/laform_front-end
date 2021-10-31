import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ALL_PRODUCTS_ACTION_TYPE } from './all-products.type';

const initialProductData = {
  products: [],
  currentPage: 1,
  totalRecords: 0,
};

const initialState = {
  products: initRequestState(initialProductData),
  categories: initRequestState(),
};

export function allProductsStore(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        products: initRequestState(initialProductData),
      };
    case ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_SUCCESS:
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
    case ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_ERROR:
      return {
        ...state,
        products: setRequestError(state.products, action.errorMessage),
      };
    case ALL_PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case ALL_PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: setRequestSuccess(
          state.products,
          {
            ...state.products.data,
            products: state.products.data.products.map((product) => {
              if (product.id === action.payload.productId) {
                product.deleted = true;
              }

              return product;
            })
          },
        ),
      };
    case ALL_PRODUCTS_ACTION_TYPE.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        products: setRequestError(state.products, action.errorMessage),
      };
    case ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING:
      return {
        ...state,
        categories: setRequestPending(state.categories),
      };
    case ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS:
      return {
        ...state,
        categories: setRequestSuccess(state.categories, action.payload),
      };
    case ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
      return {
        ...state,
        categories: setRequestError(state.categories, action.errorMessage),
      };
    default:
      return state;
  }
}
