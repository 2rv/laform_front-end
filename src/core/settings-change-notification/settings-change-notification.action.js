import { httpRequest } from '../../main/http';
import { SETTINGS_CHANGE_NOTIFICATION_API } from './settings-change-notification.constant';
import { SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE } from './settings-change-notification.type';
import { performSettingsChangeNotificationLoadData } from './settings-change-notification.convert';

export function settingsChangeNotificationFormUploadData(data, setSubmitting, userId) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_CHANGE_NOTIFICATION_API.USER_UPDATE_DATA.METHOD,
        url: SETTINGS_CHANGE_NOTIFICATION_API.USER_UPDATE_DATA.ENDPOINT(userId),
        data,
      });

      dispatch({
        type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_FORM_UPLOAD_SUCCESS,
      });

      setSubmitting(false);
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

      const performeddata = performSettingsChangeNotificationLoadData(data);

      dispatch({
        type: SETTINGS_CHANGE_NOTIFICATION_ACTION_TYPE.SETTINGS_CHANGE_NOTIFICATION_LOAD_NOTIFICATION_SUCCESS,
        data: performeddata,
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
