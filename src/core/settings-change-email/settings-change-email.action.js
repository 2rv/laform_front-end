import { httpRequest } from '../../main/http';

import { SETTINGS_CHANGE_EMAIL_API } from './settings-change-email.constant';
import { SETTINGS_CHANGE_EMAIL_ACTION_TYPE } from './settings-change-email.type';

import { performSettingsChangeEmailLoadEmailData } from './settings-change-email.convert';

export function settingsChangeEmailFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_API.UPLOAD_FORM.METHOD,
        url: SETTINGS_CHANGE_EMAIL_API.UPLOAD_FORM.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function settingsChangeEmailLoadEmail() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_PENDING,
    });

    try {
      const { data } = await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_API.LOAD_EMAIL.METHOD,
        url: SETTINGS_CHANGE_EMAIL_API.LOAD_EMAIL.ENDPOINT,
      });

      console.log(data);

      const email = performSettingsChangeEmailLoadEmailData(data);

      console.log(email);

      dispatch({
        type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_SUCCESS,
        data: email,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
