import { Dispatch } from 'redux';
import { AuthStoreAction } from './auth.type';

import { authDecode, setAutorization } from '../../../main/auth';
import { parseUserAuthData } from './auth.convert';
import { getCookie } from 'src/main/cookie';
import { AUTH_COOKIE } from 'src/main/auth/auth.constant';
import { HOME_ROUTE_PATH } from 'src/core/home';
import { redirect } from 'src/main/navigation';
import { AUTH_ACTION_TYPE } from '.';

export function authSetData(token: string | null = null) {
  const user = token ? parseUserAuthData(authDecode(token)) : null;

  //@ts-ignore
  setAutorization(token);

  const data: AuthStoreAction = {
    type: AUTH_ACTION_TYPE.SET_DATA,
    token,
    logged: !!token,
    user,
  };

  return (dispatch: Dispatch) => dispatch(data);
}

export function authGetCookieToken(ctx: any) {
  return getCookie(AUTH_COOKIE, ctx);
}

export function authLogout() {
  setAutorization(null);
  redirect(HOME_ROUTE_PATH);
}
