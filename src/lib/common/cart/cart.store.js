import { initRequestState } from '../../../main/store/store.service';
import { CART_ACTION_TYPE, SEWING_PRODUCT } from './cart.constant';
import {
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from 'src/main/store/store.service';

const initialState = {
  addProduct: initRequestState(),
  getBasket: initRequestState(),
  changeProduct: initRequestState(),
  deleteProduct: initRequestState(),
};

export const cartStore = (state = initialState, action) => {
  switch (action.type) {
    case CART_ACTION_TYPE.ADD_PRODUCT_PENDING:
      return { ...state, addProduct: setRequestPending(state.addProduct) };
    case CART_ACTION_TYPE.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: setRequestSuccess(state.addProduct, action.payload),
      };
    case CART_ACTION_TYPE.ADD_PRODUCT_ERROR:
      return {
        ...state,
        addProduct: setRequestError(state.addProduct, action.errorMessage),
      };

    case CART_ACTION_TYPE.GET_BASKET_PENDING:
      return { ...state, getBasket: setRequestPending(state.getBasket) };
    case CART_ACTION_TYPE.GET_BASKET_SUCCESS:
      return {
        ...state,
        getBasket: setRequestSuccess(state.getBasket, action.payload),
      };
    case CART_ACTION_TYPE.GET_BASKET_ERROR:
      return {
        ...state,
        getBasket: setRequestError(state.getBasket, action.errorMessage),
      };

    case CART_ACTION_TYPE.CHANGE_PRODUCT_PENDING:
      return {
        ...state,
        changeProduct: setRequestPending(state.changeProduct),
      };
    case CART_ACTION_TYPE.CHANGE_PRODUCT_SUCCESS:
      return {
        ...state,
        changeProduct: setRequestSuccess(state.changeProduct),
      };
    case CART_ACTION_TYPE.CHANGE_PRODUCT_ERROR:
      return {
        ...state,
        changeProduct: setRequestError(
          state.changeProduct,
          action.errorMessage,
        ),
      };

    case CART_ACTION_TYPE.DELETE_PRODUCT_PENDING:
      return {
        ...state,
        deleteProduct: setRequestPending(state.deleteProduct),
      };
    case CART_ACTION_TYPE.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleteProduct: setRequestSuccess(state.deleteProduct),
      };
    case CART_ACTION_TYPE.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        deleteProduct: setRequestError(
          state.deleteProduct,
          action.errorMessage,
        ),
      };
    default:
      return state;
  }
};
