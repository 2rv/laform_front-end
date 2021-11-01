import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { STATISTICS_ACTION_TYPE } from './statistics.type';

const initialState = {
  statistics: initRequestState(),
};

export function statisticsStore(state = initialState, action) {
  switch (action.type) {
    case STATISTICS_ACTION_TYPE.LOAD_DATA_PENDING:
      return {
        ...state,
        statistics: setRequestPending(state.statistics),
      };
    case STATISTICS_ACTION_TYPE.LOAD_DATA_SUCCESS:
      return {
        ...state,
        statistics: setRequestSuccess(state.statistics, action.data),
      };
    case STATISTICS_ACTION_TYPE.LOAD_DATA_ERROR:
      return {
        ...state,
        statistics: setRequestError(state.statistics, action.errorMessage),
      };
    default:
      return state;
  }
}
