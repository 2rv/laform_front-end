import { httpRequest } from '../../main/http';

import { SETTINGS_CHANGE_EMAIL_API } from './settings-change-email.constant';
import { SETTINGS_CHANGE_EMAIL_ACTION_TYPE } from './settings-change-email.type';

export function settingsChangeEmailLoadData() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_DATA_PENDING,
    });

    try {
      const { data } = await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_API.GET_EMAIL.METHOD,
        url: SETTINGS_CHANGE_EMAIL_API.GET_EMAIL.ENDPOINT,
      });

      dispatch({
        type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_DATA_SUCCESS,
        data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_LOAD_DATA_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function settingsChangeEmailFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_EMAIL_ACTION_TYPE.SETTINGS_CHANGE_EMAIL_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_CHANGE_EMAIL_API.UPDATE_EMAIL.METHOD,
        url: SETTINGS_CHANGE_EMAIL_API.UPDATE_EMAIL.ENDPOINT,
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
