import { httpRequest } from '../../main/http';
import { redirect } from '../../main/navigation';

import {
  AUTH_RECOVERY_ACCOUNT_API,
  AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_SUCCESS,
} from './auth-recovery-account.constant';
import { AUTH_RECOVERY_ACCOUNT_ACTION_TYPE } from './auth-recovery-account.type';

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

      redirect(AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_SUCCESS);
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
