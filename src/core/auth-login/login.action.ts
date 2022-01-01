import { Dispatch } from 'react';
import { httpRequest } from 'src/main/http';
import { redirect } from 'src/main/navigation';
import { authSetData } from 'src/lib/common/auth';
import { HOME_ROUTE_PATH } from '../home';
import { LOGIN_ACTION_TYPE, LoginValues, LoginActionType } from './login.type';

export function loginSubmitAction(values: LoginValues) {
  return async (dispatch: Function, setState: Dispatch<LoginActionType>) => {
    setState({
      type: LOGIN_ACTION_TYPE.PENDING,
    });

    try {
      const response = await httpRequest({
        method: 'POST',
        url: '/auth/login',
        data: values,
      });
      dispatch(authSetData(response.data.accessToken));
      setState({
        type: LOGIN_ACTION_TYPE.SUCCESS,
      });
      redirect(HOME_ROUTE_PATH);
    } catch (err: any) {
      if (err.response) {
        setState({
          type: LOGIN_ACTION_TYPE.ERROR,
          error: err.response.data.message,
        });
      }
    }
  };
}
