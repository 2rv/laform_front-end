import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { RECOVERY_ACCOUNT_API } from './recovery-account.constant';
import {
  recoveryAccountActionType,
  RECOVERY_ACCOUNT_ACTION_TYPE,
} from './recovery-account.type';

export function sendRecoveryLinkToEmail(email: string) {
  return async (dispatch: Dispatch<recoveryAccountActionType>) => {
    dispatch({
      type: RECOVERY_ACCOUNT_ACTION_TYPE.PENDING,
    });

    try {
      await httpRequest({
        method: RECOVERY_ACCOUNT_API.METHOD,
        url: RECOVERY_ACCOUNT_API.ENDPOINT,
        data: { email },
      });

      dispatch({
        type: RECOVERY_ACCOUNT_ACTION_TYPE.SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: RECOVERY_ACCOUNT_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
