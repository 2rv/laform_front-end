import { httpRequest } from '../../main/http';
import { SETTINGS_USER_INFO_API } from './settings-user-info.constant';
import { SETTINGS_USER_INFO_ACTION_TYPE } from './settings-user-info.type';

export function settingsLoadUserInfoAction() {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_USER_INFO_ACTION_TYPE.LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: SETTINGS_USER_INFO_API.LOAD_INFO.METHOD,
        url: SETTINGS_USER_INFO_API.LOAD_INFO.ENDPOINT,
      });

      dispatch({
        type: SETTINGS_USER_INFO_ACTION_TYPE.LOAD_SUCCESS,
        data: response.data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_USER_INFO_ACTION_TYPE.LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function settingsSaveUserInfoAction(values) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_USER_INFO_ACTION_TYPE.SAVE_PENDING,
    });

    try {
      await httpRequest({
        method: SETTINGS_USER_INFO_API.SAVE_INFO.METHOD,
        url: SETTINGS_USER_INFO_API.SAVE_INFO.ENDPOINT,
        data: values,
      });

      dispatch({
        type: SETTINGS_USER_INFO_ACTION_TYPE.SAVE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: SETTINGS_USER_INFO_ACTION_TYPE.SAVE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
