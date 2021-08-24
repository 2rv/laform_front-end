import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { ABOUT_ACCOUNT_ACTION_TYPE } from './about-account.type';

const initialState = {
  aboutAccount: initRequestState(),
};

export function aboutAccountStore(state = initialState, action) {
  switch (action.type) {
    case ABOUT_ACCOUNT_ACTION_TYPE.ABOUT_ACCOUNT_UPLOAD_PENDING:
      return {
        ...state,
        aboutAccount: setRequestPending(state.aboutAccount),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.ABOUT_ACCOUNT_UPLOAD_SUCCESS:
      return {
        ...state,
        aboutAccount: setRequestSuccess(state.aboutAccount),
      };
    case ABOUT_ACCOUNT_ACTION_TYPE.ABOUT_ACCOUNT_UPLOAD_ERROR:
      return {
        ...state,
        aboutAccount: setRequestError(state.aboutAccount, action.errorMessage),
      };
    default:
      return state;
  }
}
