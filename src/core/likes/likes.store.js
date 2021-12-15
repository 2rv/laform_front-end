import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from 'src/main/store/store.service';
import { LIKES_ACTION_TYPE } from './likes.type';

const initialState = {
  page: 1,
  total: 0,
  products: initRequestState([]),
  pagination: initRequestState(),
  categories: initRequestState(),
};

export function allLikesStore(state = initialState, action) {
  switch (action.type) {
    case LIKES_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return initialState;

    case LIKES_ACTION_TYPE.GET_CATEGORIES_PENDING:
      return {
        ...state,
        categories: setRequestPending(state.categories),
      };
    case LIKES_ACTION_TYPE.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: setRequestSuccess(state.categories, action.data),
      };
    case LIKES_ACTION_TYPE.GET_CATEGORIES_ERROR:
      return {
        ...state,
        categories: setRequestError(state.categories, action.errorMessage),
      };

    case LIKES_ACTION_TYPE.GET_LIKES_PENDING:
      return {
        ...state,
        products: setRequestPending(state.products),
      };
    case LIKES_ACTION_TYPE.GET_LIKES_SUCCESS:
      return {
        ...state,
        products: setRequestSuccess(state.products, action.data),
        page: state.page + 1,
        total: action.total,
      };
    case LIKES_ACTION_TYPE.GET_LIKES_ERROR:
      return {
        ...state,
        products: setRequestError(state.products, action.errorMessage),
      };

    case LIKES_ACTION_TYPE.PAGINATION_LIKES_PENDING:
      return {
        ...state,
        pagination: setRequestPending(state.pagination),
      };
    case LIKES_ACTION_TYPE.PAGINATION_LIKES_SUCCESS:
      return {
        ...state,
        products: setRequestSuccess(
          state.products,
          state.products.data.concat(action.data),
        ),
        pagination: setRequestSuccess(state.pagination),
        page: state.page + 1,
        total: action.total,
      };
    case LIKES_ACTION_TYPE.PAGINATION_LIKES_ERROR:
      return {
        ...state,
        pagination: setRequestError(state.pagination, action.errorMessage),
      };

    default:
      return state;
  }
}
