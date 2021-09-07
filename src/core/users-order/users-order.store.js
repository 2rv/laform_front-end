import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { USERS_ORDER_ACTION_TYPE } from './users-order.type';

const initialState = {
  usersOrder: initRequestState(),
};

export function usersOrderStore(state = initialState, action) {
  switch (action.type) {
    case USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_PENDING:
      return {
        ...state,
        usersOrder: setRequestPending(state.usersOrder),
      };
    case USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_SUCCESS:
      return {
        ...state,
        usersOrder: setRequestSuccess(state.usersOrder, action.payload),
      };
    case USERS_ORDER_ACTION_TYPE.USERS_ORDER_UPLOAD_ERROR:
      return {
        ...state,
        usersOrder: setRequestError(state.usersOrder, action.errorMessage),
      };
    default:
      return state;
  }
}
