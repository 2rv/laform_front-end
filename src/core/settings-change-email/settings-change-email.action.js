import { httpRequest } from '../../main/http';

import { SETTINGS_CHANGE_EMAIL_API } from './settings-change-email.constant';
import { SETTINGS_CHANGE_EMAIL_ACTION_TYPE } from './settings-change-email.type';

import { performSettingsChangeEmailLoadEmailData } from './settings-change-email.convert';
import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../../core/auth-verificate-email';
import { redirect } from '../../main/navigation';

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
      redirect(AUTH_VERIFICATE_EMAIL_ROUTE_PATH);
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

      const performedData = performSettingsChangeEmailLoadEmailData(data);

      dispatch({
        type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_SUCCESS,
        data: performedData,
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
