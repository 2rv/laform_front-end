import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from 'src/main/store/store.service';
import { SETTINGS_CHANGE_EMAIL_ACTION_TYPE } from './settings-change-email.type';

const initialState = {
  save: initRequestState(),
  email: initRequestState(),
};

export function settingsChangeEmailStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_PENDING:
      return {
        ...state,
        save: setRequestPending(state.save),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        save: setRequestSuccess(state.save),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_ERROR:
      return {
        ...state,
        save: setRequestError(state.save, action.errorMessage),
      };

    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_PENDING:
      return {
        ...state,
        email: setRequestPending(state.email),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_SUCCESS:
      return {
        ...state,
        email: setRequestSuccess(state.email, action.data),
      };
    case SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_ERROR:
      return {
        ...state,
        email: setRequestError(state.email, action.errorMessage),
      };

    default:
      return state;
  }
}
