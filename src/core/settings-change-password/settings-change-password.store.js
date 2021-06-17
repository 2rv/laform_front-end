import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SETTINGS_CHANGE_PASSWORD_ACTION_TYPE } from './settings-change-password.type';

const initialState = {
  settingsChangePasswordForm: initRequestState(),
};

export function settingsChangePasswordStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CHANGE_PASSWORD_ACTION_TYPE.SETTINGS_CHANGE_PASSWORD_FORM_UPLOAD_PENDING:
      return {
        ...state,
        settingsChangePasswordForm: setRequestPending(
          state.settingsChangePasswordForm,
        ),
      };

    case SETTINGS_CHANGE_PASSWORD_ACTION_TYPE.SETTINGS_CHANGE_PASSWORD_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        settingsChangePasswordForm: setRequestSuccess(
          state.settingsChangePasswordForm,
        ),
      };

    case SETTINGS_CHANGE_PASSWORD_ACTION_TYPE.SETTINGS_CHANGE_PASSWORD_FORM_UPLOAD_ERROR:
      return {
        ...state,
        settingsChangePasswordForm: setRequestError(
          state.settingsChangePasswordForm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
