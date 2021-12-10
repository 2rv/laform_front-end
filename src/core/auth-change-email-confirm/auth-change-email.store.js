import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from 'src/main/store/store.service';
import { AUTH_CHANGE_EMAIL_ACTION_TYPE } from './auth-change-email.type';

const initialState = {
  changeEmail: initRequestState(),
};

export function authChangeEmailStore(state = initialState, action) {
  switch (action.type) {
    case AUTH_CHANGE_EMAIL_ACTION_TYPE.AUTH_CHANGE_EMAIL_UPLOAD_PENDING:
      return {
        ...state,
        changeEmail: setRequestPending(state.changeEmail),
      };
    case AUTH_CHANGE_EMAIL_ACTION_TYPE.AUTH_CHANGE_EMAIL_UPLOAD_SUCCESS:
      return {
        ...state,
        changeEmail: setRequestSuccess(state.changeEmail),
      };
    case AUTH_CHANGE_EMAIL_ACTION_TYPE.AUTH_CHANGE_EMAIL_UPLOAD_ERROR:
      return {
        ...state,
        changeEmail: setRequestError(state.changeEmail, action.errorMessage),
      };
    default:
      return state;
  }
}
