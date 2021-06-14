import { HOME_ROUTE_PATH } from '../home';
import { SIGNUP_ROUTE_PATH } from '../signup';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from '../auth-change-password';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';

export const LOGIN_ROUTE_PATH = '/login';
// export const SIGNUP_ROUTE_PATH_DYNAMIC = () => '/login';

export const LOGIN_STORE_NAME = 'LOGIN';

export const LOGIN_API = {
  LOGIN_FORM_UPLOAD: {
    ENDPOINT: '/auth/login',
    METHOD: 'POST',
  },
};

export const LOGIN_FORM_REGISTER_PATH = SIGNUP_ROUTE_PATH;
export const LOGIN_FORM_FORGOT_PASSWORD_PATH = AUTH_RECOVERY_ACCOUNT_ROUTE_PATH;
export const LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH = HOME_ROUTE_PATH;

export const LOGIN_REDIRECT_ON_LOGGED = '/logout';
