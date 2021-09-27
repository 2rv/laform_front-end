export { LOGIN_ROUTE_PATH } from '../../lib/common/login/login.constant';

import { SIGNUP_ROUTE_PATH } from '../signup';

export const LOGIN_STORE_NAME = 'LOGIN';

import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../auth-recovery-account';

export const LOGIN_API = {
  LOGIN_FORM_UPLOAD: {
    ENDPOINT: '/auth/login',
    METHOD: 'POST',
  },
};
export const LOGIN_FORM_REGISTER_PATH = SIGNUP_ROUTE_PATH;
export const LOGIN_FORM_FORGOT_PASSWORD_PATH = AUTH_RECOVERY_ACCOUNT_ROUTE_PATH;
