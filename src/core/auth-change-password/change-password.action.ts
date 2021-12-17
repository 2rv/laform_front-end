import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import { CHANGE_PASSWORD_API } from './change-password.constant';
import {
  CHANGE_PASSWORD_ACTION_TYPE,
  ChangePasswordActionType,
  ChangePasswordValues,
} from './change-password.type';
import { LOGIN_ROUTE_PATH } from '../auth-login';

export function changePasswordAction(
  code: string,
  values: ChangePasswordValues,
) {
  return async (dispatch: Dispatch<ChangePasswordActionType>) => {
    dispatch({
      type: CHANGE_PASSWORD_ACTION_TYPE.PENDING,
    });
    try {
      await httpRequest({
        method: CHANGE_PASSWORD_API.METHOD,
        url: CHANGE_PASSWORD_API.ENDPOINT,
        params: { code },
        data: { password: values.password },
      });

      dispatch({
        type: CHANGE_PASSWORD_ACTION_TYPE.SUCCESS,
      });

      redirect(LOGIN_ROUTE_PATH);
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: CHANGE_PASSWORD_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
