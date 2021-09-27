import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ORDERS_ACTION_TYPE } from './orders.type';

const initialState = {
  orders: initRequestState(),
};

export function ordersStore(state = initialState, action) {
  switch (action.type) {
    case ORDERS_ACTION_TYPE.ORDERS_UPLOAD_PENDING:
      return {
        ...state,
        orders: setRequestPending(state.orders),
      };
    case ORDERS_ACTION_TYPE.ORDERS_UPLOAD_SUCCESS:
      return {
        ...state,
        orders: setRequestSuccess(state.orders, action.payload),
      };
    case ORDERS_ACTION_TYPE.ORDERS_UPLOAD_ERROR:
      return {
        ...state,
        orders: setRequestError(state.orders, action.errorMessage),
      };
    default:
      return state;
  }
}
