import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ORDER_NUMBER_ACTION_TYPE } from './order-number.type';

const initialState = {
  purchaseInfo: initRequestState(),
  purchaseProducts: [[], []],
  orderUpdate: initRequestState(),
};

export function orderNumberStore(state = initialState, action) {
  switch (action.type) {
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_PENDING:
      return {
        ...state,
        purchaseInfo: setRequestPending(state.purchaseInfo),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_SUCCESS:
      return {
        ...state,
        purchaseInfo: setRequestSuccess(state.purchaseInfo, action.data),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_ERROR:
      return {
        ...state,
        purchaseInfo: setRequestError(state.purchaseInfo, action.errorMessage),
      };

    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPDATE_PENDING:
      return {
        ...state,
        orderUpdate: setRequestPending(state.orderUpdate),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPDATE_SUCCESS:
      return {
        ...state,
        orderUpdate: setRequestSuccess(state.orderUpdate),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPDATE_ERROR:
      return {
        ...state,
        orderUpdate: setRequestError(state.orderUpdate, action.errorMessage),
      };

    case ORDER_NUMBER_ACTION_TYPE.ORDER_PRODUCT_INIT:
      return {
        ...state,
        purchaseProducts: action.data,
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_PRODUCT_CHANGE:
      return {
        ...state,
        purchaseProducts: action.data,
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_PRODUCT_DELETE:
      return {
        ...state,
        purchaseProducts: action.data,
      };

    default:
      return state;
  }
}
