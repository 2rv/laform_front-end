import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { AUTH_RECOVERY_ACCOUNT_ACTION_TYPE } from './auth-recovery-account.type';

const initialState = {
  authRecoveryAccountForm: initRequestState(),
};

export function authRecoveryAccountStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_PENDING:
      return {
        ...state,
        authRecoveryAccountForm: setRequestPending(
          state.authRecoveryAccountForm,
        ),
      };

    case AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        authRecoveryAccountForm: setRequestSuccess(
          state.authRecoveryAccountForm,
        ),
      };

    case AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_ERROR:
      return {
        ...state,
        authRecoveryAccountForm: setRequestError(
          state.authRecoveryAccountForm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
