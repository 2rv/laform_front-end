import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE } from './auth-verificate-email-recovery-account.type';

const initialState = {
  authRecoveryAccountForm: initRequestState(),
  user: { email: null },
};

export function authVerificateEmailRecoveryAccountStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_UPLOAD_PENDING:
      return {
        ...state,
        authRecoveryAccountForm: setRequestPending(
          state.authRecoveryAccountForm,
        ),
      };

    case AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_UPLOAD_SUCCESS:
      return {
        ...state,
        authRecoveryAccountForm: setRequestSuccess(
          state.authRecoveryAccountForm,
        ),
      };

    case AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_UPLOAD_ERROR:
      return {
        ...state,
        authRecoveryAccountForm: setRequestError(
          state.authRecoveryAccountForm,
          action.errorMessage,
        ),
      };

    case AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_SET_EMAIL:
      return {
        ...state,
        user: action.data,
      };

    default:
      return state;
  }
}
