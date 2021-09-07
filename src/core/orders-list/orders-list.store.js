import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ORDERS_LIST_ACTION_TYPE } from './orders-list.type';

const initialState = {
  ordersList: initRequestState(),
};

export function ordersListStore(state = initialState, action) {
  switch (action.type) {
    case ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_PENDING:
      return {
        ...state,
        ordersList: setRequestPending(state.ordersList),
      };
    case ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_SUCCESS:
      return {
        ...state,
        ordersList: setRequestSuccess(state.ordersList, action.payload),
      };
    case ORDERS_LIST_ACTION_TYPE.ORDERS_LIST_UPLOAD_ERROR:
      return {
        ...state,
        ordersList: setRequestError(state.ordersList, action.errorMessage),
      };
    default:
      return state;
  }
}
