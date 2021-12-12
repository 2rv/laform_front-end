import { Dispatch } from 'redux';
import { AuthStoreAction } from './auth.type';
import { authDecode, setAutorization } from 'src/main/auth';
import { parseUserAuthData } from './auth.convert';
import { getCookie } from 'src/main/cookie';
import { AUTH_COOKIE } from 'src/main/auth/auth.constant';
import { redirect } from 'src/main/navigation';
import { AUTH_ACTION_TYPE } from './auth.type';

export function authSetData(token: any) {
  const user = token ? parseUserAuthData(authDecode(token)) : null;
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
  redirect('/');
}
export function authSetEmailConfirmed() {
  return (dispatch: Dispatch) =>
    dispatch({ type: AUTH_ACTION_TYPE.SET_AUTH_CONFIRMED });
}
