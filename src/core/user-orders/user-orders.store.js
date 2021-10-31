import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { USER_ORDERS_ACTION_TYPE } from './user-orders.type';

const initialState = {
  userOrders: initRequestState({
    userOrders: [],
    currentPage: 1,
    totalRecords: 0,
  }),
};

export function userOrdersStore(state = initialState, action) {
  switch (action.type) {
    case USER_ORDERS_ACTION_TYPE.USER_ORDERS_UPLOAD_PENDING:
      return {
        ...state,
        userOrders: setRequestPending(state.userOrders),
      };
    case USER_ORDERS_ACTION_TYPE.USER_ORDERS_UPLOAD_SUCCESS:
      const oldUserOrders = state.userOrders.data.userOrders;
      const newUserOrders = action.payload.userOrders;
      const totalRecords = action.payload.totalRecords;
      const prevCurrentPage = state.userOrders.data.currentPage;
      return {
        ...state,
        userOrders: setRequestSuccess(
          state.userOrders,
          {
            userOrders: [...oldUserOrders, ...newUserOrders],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
        ),
      };
    case USER_ORDERS_ACTION_TYPE.USER_ORDERS_UPLOAD_ERROR:
      return {
        ...state,
        userOrders: setRequestError(state.userOrders, action.errorMessage),
      };
    default:
      return state;
  }
}
