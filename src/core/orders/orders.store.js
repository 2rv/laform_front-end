import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ORDERS_ACTION_TYPE } from './orders.type';

const initialProductData = {
  orders: [],
  currentPage: 1,
  totalRecords: 0,
};

const initialState = {
  orders: initRequestState(initialProductData),
};

export function ordersStore(state = initialState, action) {
  switch (action.type) {
    case ORDERS_ACTION_TYPE.RESET_PRODUCTS_STATE:
      return {
        ...state,
        orders: initRequestState(initialProductData),
      };
    case ORDERS_ACTION_TYPE.ORDERS_UPLOAD_PENDING:
      return {
        ...state,
        orders: setRequestPending(state.orders),
      };
    case ORDERS_ACTION_TYPE.ORDERS_UPLOAD_SUCCESS:
      const oldOrders = state.orders.data.orders;
      const newOrders = action.payload.orders;
      const totalRecords = action.payload.totalRecords;
      const prevCurrentPage = state.orders.data.currentPage;
      return {
        ...state,
        orders: setRequestSuccess(
          state.orders,
          {
            orders: [...oldOrders, ...newOrders],
            currentPage: prevCurrentPage + 1,
            totalRecords,
          },
        ),
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
