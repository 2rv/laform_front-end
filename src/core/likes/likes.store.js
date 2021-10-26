import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { LIKES_ACTION_TYPE } from './likes.type';

const initialProductData = {
  products: [],
  currentPage: 1,
  totalRecords: 0,
};

const initialState = {
  likes: initRequestState(initialProductData),
};

export function allLikesStore(state = initialState, action) {
  switch (action.type) {
    case LIKES_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        likes: initRequestState(initialProductData),
      };
    case LIKES_ACTION_TYPE.LIKES_UPLOAD_PENDING:
      return {
        ...state,
        likes: setRequestPending(state.likes),
      };
    case LIKES_ACTION_TYPE.LIKES_UPLOAD_SUCCESS:
      const oldProducts = state.likes.data.products;
      const newProducts = action.data.products;
      const totalRecords = action.data.totalRecords;
      const prevCurrentPage = state.likes.data.currentPage;
      return {
        ...state,
        likes: setRequestSuccess(
          state.likes,
          {
            products: [...oldProducts, ...newProducts],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
        ),
      };
    case LIKES_ACTION_TYPE.LIKES_UPLOAD_ERROR:
      return {
        ...state,
        likes: setRequestError(state.likes, action.errorMessage),
      };
    default:
      return state;
  }
}
