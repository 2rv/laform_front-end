import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from 'src/main/store/store.service';
import { PATTERNS_ACTION_TYPE } from './patterns.type';

const initialState = {
  page: 1,
  total: 0,
  products: initRequestState([]),
  categories: initRequestState(),
};

export function patternsStore(state = initialState, action) {
  switch (action.type) {
    case PATTERNS_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        page: 1,
        total: 0,
        products: initRequestState([]),
      };

    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_SUCCESS:
      return {
        ...state,
        products: setRequestSuccess(
          state.products,
          state.products.data.concat(action.data),
        ),
        page: state.page + 1,
        total: action.total,
      };
    case PATTERNS_ACTION_TYPE.PATTERNS_UPLOAD_ERROR:
      return {
        ...state,
        products: setRequestError(state.products, action.errorMessage),
      };

    case PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_PENDING:
      return {
        ...state,
        categories: setRequestPending(state.categories),
      };
    case PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_SUCCESS:
      return {
        ...state,
        categories: setRequestSuccess(state.categories, action.data),
      };
    case PATTERNS_ACTION_TYPE.CATEGORIES_UPLOAD_ERROR:
      return {
        ...state,
        categories: setRequestError(state.categories, action.errorMessage),
      };

    default:
      return state;
  }
}
