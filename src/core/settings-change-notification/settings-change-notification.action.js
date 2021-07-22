import { httpRequest } from '../../main/http';
import { SETTINGS_CHANGE_NOTIFICATION_API } from './settings-change-notification.constant';
import { SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE } from './settings-change-notification.type';
import { performSettingsChangeNotificationLoadData } from './settings-change-notification.convert';

export function settingsChangeNotificationFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_CHANGE_NOTIFICATION_API.UPLOAD_FORM.METHOD,
        url: SETTINGS_CHANGE_NOTIFICATION_API.UPLOAD_FORM.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function settingsChangeNotificationLoad() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_LOAD_NOTIFICATION_PENDING,
    });

    try {
      const { data } = await httpRequest({
        method: SETTINGS_CHANGE_NOTIFICATION_API.LOAD_NOTIFICATION.METHOD,
        url: SETTINGS_CHANGE_NOTIFICATION_API.LOAD_NOTIFICATION.ENDPOINT,
      });

      const notification = performSettingsChangeNotificationLoadData(data);

      dispatch({
        type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_LOAD_NOTIFICATION_SUCCESS,
        data: notification,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_LOAD_NOTIFICATION_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
