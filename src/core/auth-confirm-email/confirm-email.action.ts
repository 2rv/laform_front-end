import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import { authSetData } from 'src/lib/common/auth';
import { HOME_ROUTE_PATH } from '../home';
import {
  confirmEmailActionType,
  CONFIRM_EMAIL_ACTION_TYPE,
} from './confirm-email.type';
import { CONFIRM_EMAIL_API } from './confirm-email.constant';

export function sendCodeToEmailAction() {
  return async (setState: Dispatch<confirmEmailActionType>) => {
    setState({
      type: CONFIRM_EMAIL_ACTION_TYPE.PENDING,
    });
    try {
      await httpRequest({
        method: 'GET',
        url: CONFIRM_EMAIL_API.SEND_CODE,
      });
      setState({
        type: CONFIRM_EMAIL_ACTION_TYPE.SEND_SUCCESS,
      });
    } catch (err: any) {
      if (err.response) {
        console.log(err.response.data.message);

        setState({
          type: CONFIRM_EMAIL_ACTION_TYPE.SEND_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}

export function sendConfirmCodeAction(code: string) {
  return async (setState: Dispatch<confirmEmailActionType>, dispatch: any) => {
    setState({
      type: CONFIRM_EMAIL_ACTION_TYPE.PENDING,
    });
    try {
      const response = await httpRequest({
        method: 'GET',
        url: CONFIRM_EMAIL_API.CONFIRM_CODE + code,
      });
      setState({
        type: CONFIRM_EMAIL_ACTION_TYPE.CONFIRM_SUCCESS,
      });
      dispatch(authSetData(response.data.accessToken));
      redirect(HOME_ROUTE_PATH);
    } catch (err: any) {
      if (err.response) {
        setState({
          type: CONFIRM_EMAIL_ACTION_TYPE.CONFIRM_ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
