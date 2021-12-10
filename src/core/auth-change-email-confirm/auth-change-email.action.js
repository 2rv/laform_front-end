import { httpRequest } from 'src/main/http';
import { AUTH_CHANGE_EMAIL_API } from './auth-change-email.constant';
import { AUTH_CHANGE_EMAIL_ACTION_TYPE } from './auth-change-email.type';

export function confirmChangeEmailAction(code) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_CHANGE_EMAIL_ACTION_TYPE.AUTH_CHANGE_EMAIL_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_CHANGE_EMAIL_API.METHOD,
        url: AUTH_CHANGE_EMAIL_API.ENDPOINT(code),
      });

      dispatch({
        type: AUTH_CHANGE_EMAIL_ACTION_TYPE.AUTH_CHANGE_EMAIL_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: AUTH_CHANGE_EMAIL_ACTION_TYPE.AUTH_CHANGE_EMAIL_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
