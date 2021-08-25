import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';

import { AUTH_CHANGE_PASSWORD_API } from './auth-change-password.constant';
import { AUTH_CHANGE_PASSWORD_ACTION_TYPE } from './auth-change-password.type';
import { HOME_ROUTE_PATH } from '../home';

export function authChangePasswordFormUploadData(data, code) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: AUTH_CHANGE_PASSWORD_API.METHOD,
        url: AUTH_CHANGE_PASSWORD_API.ENDPOINT,
        params: { code },
        data,
      });

      dispatch({
        type: AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_SUCCESS,
      });

      redirect(HOME_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: AUTH_CHANGE_PASSWORD_ACTION_TYPE.AUTH_CHANGE_PASSWORD_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
