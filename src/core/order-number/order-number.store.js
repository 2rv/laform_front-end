import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ORDER_NUMBER_ACTION_TYPE } from './order-number.type';

const initialState = {
  orderNumber: initRequestState(),
};

export function orderNumberStore(state = initialState, action) {
  switch (action.type) {
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_PENDING:
      return {
        ...state,
        orderNumber: setRequestPending(state.orderNumber),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_SUCCESS:
      return {
        ...state,
        orderNumber: setRequestSuccess(state.orderNumber, action.orderNumberDetails),
      };
    case ORDER_NUMBER_ACTION_TYPE.ORDER_NUMBER_UPLOAD_ERROR:
      return {
        ...state,
        orderNumber: setRequestError(state.orderNumber, action.errorMessage),
      };
    default:
      return state;
  }
}
