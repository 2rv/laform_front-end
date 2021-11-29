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
  deliveryTypes: initRequestState(),
  sendEmailCode: initRequestState(),
  confirmEmailForOrder: initRequestState(),
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

    case BASKET_ACTION_TYPE.GET_DELIVERY_TYPES_PENDING:
      return {
        ...state,
        deliveryTypes: setRequestPending(state.deliveryTypes),
      };
    case BASKET_ACTION_TYPE.GET_DELIVERY_TYPES_SUCCESS:
      return {
        ...state,
        deliveryTypes: setRequestSuccess(state.deliveryTypes, action.payload),
      };
    case BASKET_ACTION_TYPE.GET_DELIVERY_TYPES_ERROR:
      return {
        ...state,
        deliveryTypes: setRequestError(
          state.deliveryTypes,
          action.errorMessage,
        ),
      };

    case BASKET_ACTION_TYPE.SEND_EMAIL_CODE_PENDING:
      return {
        ...state,
        sendEmailCode: setRequestPending(state.sendEmailCode),
      };
    case BASKET_ACTION_TYPE.SEND_EMAIL_CODE_SUCCESS:
      return {
        ...state,
        sendEmailCode: setRequestSuccess(state.sendEmailCode),
      };
    case BASKET_ACTION_TYPE.SEND_EMAIL_CODE_ERROR:
      return {
        ...state,
        sendEmailCode: setRequestError(
          state.sendEmailCode,
          action.errorMessage,
        ),
      };

    case BASKET_ACTION_TYPE.CONFIRM_EMAIL_FOR_ORDER_PENDING:
      return {
        ...state,
        confirmEmailForOrder: setRequestPending(state.confirmEmailForOrder),
      };
    case BASKET_ACTION_TYPE.CONFIRM_EMAIL_FOR_ORDER_SUCCESS:
      return {
        ...state,
        confirmEmailForOrder: setRequestSuccess(
          state.confirmEmailForOrder,
          action.payload,
        ),
      };
    case BASKET_ACTION_TYPE.CONFIRM_EMAIL_FOR_ORDER_ERROR:
      return {
        ...state,
        confirmEmailForOrder: setRequestError(
          state.confirmEmailForOrder,
          action.errorMessage,
        ),
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
