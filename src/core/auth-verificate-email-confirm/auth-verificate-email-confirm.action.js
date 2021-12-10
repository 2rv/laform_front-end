import { authSetEmailConfirmed } from 'src/lib/common/auth/auth.action';
import { httpRequest } from '../../main/http';

import { AUTH_VERIFICATE_EMAIL_CONFIRM_API } from './auth-verificate-email-confirm.constant';
import { AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE } from './auth-verificate-email-confirm.type';

export function authVerificateEmailConfirmUploadData(code) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_CONFIRM_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: AUTH_VERIFICATE_EMAIL_CONFIRM_API.METHOD,
        url: AUTH_VERIFICATE_EMAIL_CONFIRM_API.ENDPOINT(code),
      });
      //   if (res.data === true) {
      //     dispatch(authSetEmailConfirmed());
      //   }
      dispatch({
        type: AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_CONFIRM_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: AUTH_VERIFICATE_EMAIL_CONFIRM_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_CONFIRM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
