import { httpRequest } from '../../main/http';
import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_API } from './auth-verificate-email-recovery-account.constant';
import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE } from './auth-verificate-email-recovery-account.type';

export function authVerificateEmailRecoveryAccountUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_API.METHOD,
        url: AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_API.ENDPOINT,
        data,
      });
      dispatch({
        type: AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_UPLOAD_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
