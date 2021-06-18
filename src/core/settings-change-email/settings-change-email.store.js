import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SETTINGS_CHANGE_EMAIL_ACTION_TYPE } from './settings-change-email.type';

const initialState = {
  changeEmail: initRequestState(),
  formChangeEmail: initRequestState(),
};

export function settingsChangeEmailStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_DATA_PENDING:
      return {
        ...state,
        changeEmail: setRequestPending(state.changeEmail),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_DATA_SUCCESS:
      return {
        ...state,
        changeEmail: setRequestSuccess(state.changeEmail, action.data),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_DATA_ERROR:
      return {
        ...state,
        changeEmail: setRequestError(state.changeEmail, action.errorMessage),
      };

    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_PENDING:
      return {
        ...state,
        formChangeEmail: setRequestPending(state.formChangeEmail),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        formChangeEmail: setRequestSuccess(state.formChangeEmail),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_ERROR:
      return {
        ...state,
        formChangeEmail: setRequestError(
          state.formChangeEmail,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
