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
  promoCode: initRequestState(),
  order: initRequestState(),
  userInfo: initRequestState(),
};

export function basketStore(state = initialState, action) {
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
    case BASKET_ACTION_TYPE.PROMOCODE_CHECK_PENDING:
      return {
        ...state,
        promoCode: setRequestPending(state.promoCode),
      };
    case BASKET_ACTION_TYPE.PROMOCODE_CHECK_SUCCESS:
      return {
        ...state,
        promoCode: setRequestSuccess(state.promoCode, action.data),
      };
    case BASKET_ACTION_TYPE.PROMOCODE_CHECK_ERROR:
      return {
        ...state,
        promoCode: setRequestError(state.promoCode, action.errorMessage),
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

    case BASKET_ACTION_TYPE.LOAD_USER_INFO_PENDING:
      return {
        ...state,
        userInfo: setRequestPending(state.userInfo),
      };
    case BASKET_ACTION_TYPE.LOAD_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: setRequestSuccess(state.userInfo, action.data),
      };
    case BASKET_ACTION_TYPE.LOAD_USER_INFO_ERROR:
      return {
        ...state,
        userInfo: setRequestError(state.userInfo, action.errorMessage),
      };

    default:
      return state;
  }
}
