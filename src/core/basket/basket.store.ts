import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { BASKET_ACTION_TYPE } from './basket.type';

const initialState = {
  basket: [],
  basketAction: initRequestState(),
  order: initRequestState(),
};

export function basketStore(state = initialState, action: any) {
  switch (action.type) {
    case BASKET_ACTION_TYPE.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.data],
        basketAction: setRequestSuccess(state.basketAction),
      };

    case BASKET_ACTION_TYPE.PRODUCT_ADD_PENDING:
      return {
        ...state,
        basketAction: setRequestPending(state.basketAction),
      };
    case BASKET_ACTION_TYPE.PRODUCT_ADD_SUCCESS:
      return {
        ...state,
        basketAction: setRequestSuccess(state.basketAction),
      };
    case BASKET_ACTION_TYPE.PRODUCT_ADD_ERROR:
      return {
        ...state,
        basketAction: setRequestError(state.basketAction, action.errorMessage),
      };

    case BASKET_ACTION_TYPE.INIT_BASKET:
      return {
        ...state,
        basket: action.data,
      };
    case BASKET_ACTION_TYPE.CHANGE_BASKET:
      return {
        ...state,
        basket: action.data,
      };

    case BASKET_ACTION_TYPE.CREATE_ORDER_PENDING:
      return {
        ...state,
        order: setRequestPending(state.order),
      };
    case BASKET_ACTION_TYPE.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        order: setRequestSuccess(state.order, action.data),
      };
    case BASKET_ACTION_TYPE.CREATE_ORDER_ERROR:
      return {
        ...state,
        order: setRequestError(state.order, action.errorMessage),
      };

    default:
      return state;
  }
}
