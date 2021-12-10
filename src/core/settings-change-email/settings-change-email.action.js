import { httpRequest } from 'src/main/http';
import { SETTINGS_CHANGE_EMAIL_API } from './settings-change-email.constant';
import {
  SETTINGS_CHANGE_EMAIL_ACTION_TYPE,
  SETTINGS_CHANGE_EMAIL_FIELD_NAME,
} from './settings-change-email.type';

export function settingsUpateEmailAction(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_API.UPLOAD_FORM.METHOD,
        url: SETTINGS_CHANGE_EMAIL_API.UPLOAD_FORM.ENDPOINT,
        data: data,
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

export function settingsLoadEmailAction() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_PENDING,
    });
    try {
      const response = await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_API.LOAD_EMAIL.METHOD,
        url: SETTINGS_CHANGE_EMAIL_API.LOAD_EMAIL.ENDPOINT,
      });
      dispatch({
        type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_EMAIL_SUCCESS,
        data: response.data[SETTINGS_CHANGE_EMAIL_FIELD_NAME.EMAIL],
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
