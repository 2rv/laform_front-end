import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { USER_ORDER_ACTION_TYPE } from './user-order.type';

const initialState = {
  order: initRequestState(),
};

export function userOrderStore(state = initialState, action) {
  switch (action.type) {
    case USER_ORDER_ACTION_TYPE.USER_ORDER_UPLOAD_PENDING:
      return {
        ...state,
        order: setRequestPending(state.order),
      };
    case USER_ORDER_ACTION_TYPE.USER_ORDER_UPLOAD_SUCCESS:
      return {
        ...state,
        order: setRequestSuccess(state.order, action.data),
      };
    case USER_ORDER_ACTION_TYPE.USER_ORDER_UPLOAD_ERROR:
      return {
        ...state,
        order: setRequestError(state.order, action.errorMessage),
      };
    default:
      return state;
  }
}
