import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { STATISTICS_ACTION_TYPE } from './statistics.type';

const initialState = {
  ordersCount: initRequestState(),
  price: initRequestState(),
};

export function statisticsStore(state = initialState, action) {
  switch (action.type) {
    case STATISTICS_ACTION_TYPE.ORDERS_COUNT_PENDING:
      return {
        ...state,
        ordersCount: setRequestPending(state.ordersCount),
      };
    case STATISTICS_ACTION_TYPE.ORDERS_COUNT_SUCCESS:
      return {
        ...state,
        ordersCount: setRequestSuccess(state.ordersCount, action.payload),
      };
    case STATISTICS_ACTION_TYPE.ORDERS_COUNT_ERROR:
      return {
        ...state,
        ordersCount: setRequestError(state.ordersCount, action.errorMessage),
      };
    case STATISTICS_ACTION_TYPE.PRICE_PENDING:
      return {
        ...state,
        price: setRequestPending(state.price),
      };
    case STATISTICS_ACTION_TYPE.PRICE_SUCCESS:
      return {
        ...state,
        price: setRequestSuccess(state.price, action.payload),
      };
    case STATISTICS_ACTION_TYPE.PRICE_ERROR:
      return {
        ...state,
        price: setRequestError(state.price, action.errorMessage),
      };
    default:
      return state;
  }
}
