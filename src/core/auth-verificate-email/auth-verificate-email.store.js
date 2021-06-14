import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { AUTH_VERIFICATE_EMAIL_ACTION_TYPE } from './auth-verificate-email.type';

const initialState = {
  authVerificateEmail: initRequestState(),
};

export function authVerificateEmailStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_VERIFICATE_EMAIL_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_UPLOAD_PENDING:
      return {
        ...state,
        authVerificateEmail: setRequestPending(state.authVerificateEmail),
      };

    case AUTH_VERIFICATE_EMAIL_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_UPLOAD_SUCCESS:
      return {
        ...state,
        authVerificateEmail: setRequestSuccess(state.authVerificateEmail),
      };

    case AUTH_VERIFICATE_EMAIL_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_UPLOAD_ERROR:
      return {
        ...state,
        authVerificateEmail: setRequestError(
          state.authVerificateEmail,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
