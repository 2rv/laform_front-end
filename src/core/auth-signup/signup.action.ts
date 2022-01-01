import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import { authSetData } from 'src/lib/common/auth';
import { AUTH_CONFIRM_EMAIL_ROUTE_PATH } from '../auth-confirm-email';
import {
  SignupActionType,
  SignupValues,
  SIGNUP_ACTION_TYPE,
} from './signup.type';

export function signupSubmitAction(values: SignupValues) {
  return async (dispatch: Function, setState: Dispatch<SignupActionType>) => {
    setState({
      type: SIGNUP_ACTION_TYPE.PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'POST',
        url: '/auth/signup',
        data: {
          login: values.login,
          email: values.email,
          password: values.password,
        },
      });
      dispatch(authSetData(response.data.accessToken));
      setState({
        type: SIGNUP_ACTION_TYPE.SUCCESS,
      });
      redirect(AUTH_CONFIRM_EMAIL_ROUTE_PATH);
    } catch (err: any) {
      if (err.response) {
        setState({
          type: SIGNUP_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
