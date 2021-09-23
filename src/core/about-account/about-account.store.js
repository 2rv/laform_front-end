import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';

const initialState = {
  user: initRequestState(),
};

export function aboutAccountStore(state = initialState, action) {
  switch (action.type) {
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_PENDING:
      return {
        ...state,
        user: setRequestPending(state.user),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_SUCCESS:
      return {
        ...state,
        user: setRequestSuccess(state.user, action.user),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.USER_LOAD_DATA_ERROR:
      return {
        ...state,
        user: setRequestError(state.user, action.errorMessage),
      };
    default:
      return state;
  }
}
