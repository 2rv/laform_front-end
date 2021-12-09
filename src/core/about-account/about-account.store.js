import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';

const initialState = {
  data: initRequestState(),
};

export function aboutAccountStore(state = initialState, action) {
  switch (action.type) {
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_PENDING:
      return {
        ...state,
        data: setRequestPending(state.data),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: setRequestSuccess(state.data, action.data),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.data_LOAD_DATA_ERROR:
      return {
        ...state,
        data: setRequestError(state.data, action.errorMessage),
      };
    default:
      return state;
  }
}
