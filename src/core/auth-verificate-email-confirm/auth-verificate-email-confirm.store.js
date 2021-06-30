import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE } from './auth-verificate-email-confirm.type';

const initialState = {
  authVerificateEmailConfirm: initRequestState(),
};

export function authVerificateEmailConfirmStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_CONFIRM_UPLOAD_PENDING:
      return {
        ...state,
        authVerificateEmailConfirm: setRequestPending(
          state.authVerificateEmailConfirm,
        ),
      };

    case AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_CONFIRM_UPLOAD_SUCCESS:
      return {
        ...state,
        authVerificateEmailConfirm: setRequestSuccess(
          state.authVerificateEmailConfirm,
        ),
      };

    case AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_CONFIRM_UPLOAD_ERROR:
      return {
        ...state,
        authVerificateEmailConfirm: setRequestError(
          state.authVerificateEmailConfirm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
