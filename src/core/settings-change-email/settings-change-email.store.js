import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SETTINGS_CHANGE_EMAIL_ACTION_TYPE } from './settings-change-email.type';

const initialState = {
  settingsChangeEmailUploadForm: initRequestState(),
  settingsChangeEmailLoadEmail: initRequestState(),
};

export function settingsChangeEmailStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_PENDING:
      return {
        ...state,
        settingsChangeEmailUploadForm: setRequestPending(
          state.settingsChangeEmailUploadForm,
        ),
      };

    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        settingsChangeEmailUploadForm: setRequestSuccess(
          state.settingsChangeEmailUploadForm,
        ),
      };

    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_ERROR:
      return {
        ...state,
        settingsChangeEmailUploadForm: setRequestError(
          state.settingsChangeEmailUploadForm,
          action.errorMessage,
        ),
      };

    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_PENDING:
      return {
        ...state,
        settingsChangeEmailLoadEmail: setRequestPending(
          state.settingsChangeEmailLoadEmail,
        ),
      };

    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_SUCCESS:
      return {
        ...state,
        settingsChangeEmailLoadEmail: setRequestSuccess(
          state.settingsChangeEmailLoadEmail,
          action.data,
        ),
      };

    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_ERROR:
      return {
        ...state,
        settingsChangeEmailLoadEmail: setRequestError(
          state.settingsChangeEmailLoadEmail,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
