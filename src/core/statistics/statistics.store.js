import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { STATISTICS_ACTION_TYPE } from './statistics.type';

const initialState = {
  general: initRequestState(),
  price: initRequestState(),
  count: initRequestState(),
  users: initRequestState(),
};

export function statisticsStore(state = initialState, action) {
  switch (action.type) {
    case STATISTICS_ACTION_TYPE.GET_GENERAL_PENDING:
      return {
        ...state,
        general: setRequestPending(state.general),
      };
    case STATISTICS_ACTION_TYPE.GET_GENERAL_SUCCESS:
      return {
        ...state,
        general: setRequestSuccess(state.general, action.data),
      };
    case STATISTICS_ACTION_TYPE.GET_GENERAL_ERROR:
      return {
        ...state,
        general: setRequestError(state.general, action.errorMessage),
      };
    case STATISTICS_ACTION_TYPE.GET_PRICE_PENDING:
      return {
        ...state,
        price: setRequestPending(state.price),
      };
    case STATISTICS_ACTION_TYPE.GET_PRICE_SUCCESS:
      return {
        ...state,
        price: setRequestSuccess(state.price, action.data),
      };
    case STATISTICS_ACTION_TYPE.GET_PRICE_ERROR:
      return {
        ...state,
        price: setRequestError(state.price, action.errorMessage),
      };
    case STATISTICS_ACTION_TYPE.GET_COUNT_PENDING:
      return {
        ...state,
        count: setRequestPending(state.count),
      };
    case STATISTICS_ACTION_TYPE.GET_COUNT_SUCCESS:
      return {
        ...state,
        count: setRequestSuccess(state.count, action.data),
      };
    case STATISTICS_ACTION_TYPE.GET_COUNT_ERROR:
      return {
        ...state,
        count: setRequestError(state.count, action.errorMessage),
      };
    case STATISTICS_ACTION_TYPE.GET_USERS_PENDING:
      return {
        ...state,
        users: setRequestPending(state.users),
      };
    case STATISTICS_ACTION_TYPE.GET_USERS_SUCCESS:
      return {
        ...state,
        users: setRequestSuccess(state.users, action.data),
      };
    case STATISTICS_ACTION_TYPE.GET_USERS_ERROR:
      return {
        ...state,
        users: setRequestError(state.users, action.errorMessage),
      };
    default:
      return state;
  }
}
