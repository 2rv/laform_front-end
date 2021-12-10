import { httpRequest } from '../../main/http';
import { AUTH_VERIFICATE_EMAIL_API } from './auth-verificate-email.constant';
import { AUTH_VERIFICATE_EMAIL_ACTION_TYPE } from './auth-verificate-email.type';

export function authVerificateEmailUploadData() {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATE_EMAIL_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_VERIFICATE_EMAIL_API.METHOD,
        url: AUTH_VERIFICATE_EMAIL_API.ENDPOINT,
      });

      dispatch({
        type: AUTH_VERIFICATE_EMAIL_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: AUTH_VERIFICATE_EMAIL_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
