import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import {
  CHANGE_PASSWORD_ACTION_TYPE,
  ChangePasswordValues,
  ChangePasswordActionType,
} from './change-password.type';

export function changePasswordAction(values: ChangePasswordValues) {
  return async (dispatch: Dispatch<ChangePasswordActionType>) => {
    dispatch({
      type: CHANGE_PASSWORD_ACTION_TYPE.PENDING,
    });

    try {
      await httpRequest({
        method: 'PATCH',
        url: '/user/settings/password',
        data: {
          password: values.oldPassword,
          newPassword: values.password,
        },
      });

      dispatch({
        type: CHANGE_PASSWORD_ACTION_TYPE.SUCCESS,
      });
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
