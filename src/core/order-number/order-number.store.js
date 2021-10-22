import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ORDER_NUMBER_ACTION_TYPE } from './order-number.type';

const initialState = {
  order: initRequestState(),
  orderUpdate: initRequestState(),
};

export function orderNumberStore(state = initialState, action) {
  switch (action.type) {
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_PENDING:
      return {
        ...state,
        order: setRequestPending(state.order),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_SUCCESS:
      return {
        ...state,
        order: setRequestSuccess(state.order, action.data),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_ERROR:
      return {
        ...state,
        order: setRequestError(state.order, action.errorMessage),
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
    default:
      return state;
  }
}
