import { httpRequest } from '../../main/http';

import { SETTINGS_CHANGE_PASSWORD_API } from './settings-change-password.constant';
import { SETTINGS_CHANGE_PASSWORD_ACTION_TYPE } from './settings-change-password.type';

export function settingsChangePasswordFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_CHANGE_PASSWORD_ACTION_TYPE.SETTINGS_CHANGE_PASSWORD_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_CHANGE_PASSWORD_API.METHOD,
        url: SETTINGS_CHANGE_PASSWORD_API.ENDPOINT,
        data,
      });

      dispatch({
        type: SETTINGS_CHANGE_PASSWORD_ACTION_TYPE.SETTINGS_CHANGE_PASSWORD_FORM_UPLOAD_SUCCESS,
      });

      setSubmitting(false);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_CHANGE_PASSWORD_ACTION_TYPE.SETTINGS_CHANGE_PASSWORD_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
