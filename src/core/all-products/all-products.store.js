import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ALL_PRODUCTS_ACTION_TYPE } from './all-products.type';

const initialState = {
  page: 1,
  total: 0,
  products: initRequestState([]),
  categories: initRequestState(),
};

export function allProductsStore(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        page: 1,
        total: 0,
        products: initRequestState([]),
      };

    case ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_SUCCESS:
      return {
        ...state,
        products: setRequestSuccess(
          state.products,
          state.products.data.concat(action.data),
        ),
        page: state.page + 1,
        total: action.total,
      };
    case ALL_PRODUCTS_ACTION_TYPE.ALL_PRODUCTS_UPLOAD_ERROR:
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
        categories: setRequestSuccess(state.categories, action.data),
      };
    case ALL_PRODUCTS_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
      return {
        ...state,
        categories: setRequestError(state.categories, action.errorMessage),
      };

    case ALL_PRODUCTS_ACTION_TYPE.DISABLE_PRODUCT_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case ALL_PRODUCTS_ACTION_TYPE.DISABLE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: setRequestSuccess(
          state.products,
          state.products.data.map((product) => {
            if (product.id === action.id) {
              product.deleted = action.deleted;
            }
            return product;
          }),
        ),
      };
    case ALL_PRODUCTS_ACTION_TYPE.DISABLE_PRODUCT_ERROR:
      return {
        ...state,
        products: setRequestError(state.products, action.errorMessage),
      };
    default:
      return state;
  }
}
