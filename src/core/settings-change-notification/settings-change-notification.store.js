import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';

import { SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE } from './settings-change-notification.type';

const initialState = {
  settingsChangeNotificationUploadForm: initRequestState(),
  settingsChangeNotificationLoadNotification: initRequestState(),
};

export function settingsChangeNotificationStore(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_PENDING:
      return {
        ...state,
        settingsChangeNotificationUploadForm: setRequestPending(
          state.settingsChangeNotificationUploadForm,
        ),
      };

    case SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_SUCCESS:
      return {
        ...state,
        settingsChangeNotificationUploadForm: setRequestSuccess(
          state.settingsChangeNotificationUploadForm,
        ),
      };

    case SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_ERROR:
      return {
        ...state,
        settingsChangeNotificationUploadForm: setRequestError(
          state.settingsChangeNotificationUploadForm,
          action.errorMessage,
        ),
      };

    case SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_LOAD_NOTIFICATION_PENDING:
      return {
        ...state,
        settingsChangeNotificationLoadNotification: setRequestPending(
          state.settingsChangeNotificationLoadNotification,
        ),
      };

    case SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_LOAD_NOTIFICATION_SUCCESS:
      return {
        ...state,
        settingsChangeNotificationLoadNotification: setRequestSuccess(
          state.settingsChangeNotificationLoadNotification,
          action.data,
        ),
      };

    case SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_LOAD_NOTIFICATION_ERROR:
      return {
        ...state,
        settingsChangeNotificationLoadNotification: setRequestError(
          state.settingsChangeNotificationLoadNotification,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
