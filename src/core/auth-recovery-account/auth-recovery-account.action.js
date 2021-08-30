import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';

import {
  AUTH_RECOVERY_ACCOUNT_API,
  AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH,
} from './auth-recovery-account.constant';
import { AUTH_RECOVERY_ACCOUNT_ACTION_TYPE } from './auth-recovery-account.type';
import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE } from '../auth-verificate-email-recovery-account';

export function authRecoveryAccountFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: AUTH_RECOVERY_ACCOUNT_API.METHOD,
        url: AUTH_RECOVERY_ACCOUNT_API.ENDPOINT,
        data,
      });

      dispatch({
        type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_SUCCESS,
      });

      dispatch({
        type: AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_SET_EMAIL,
        data,
      });

      redirect(AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH);
    } catch (err) {
      if (err.response) {
        dispatch({
          type: AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
