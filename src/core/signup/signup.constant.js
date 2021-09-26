export { SIGNUP_ROUTE_PATH } from '../../lib/common/signup/signup.constant';

import { LOGIN_ROUTE_PATH } from '../login';

export const SIGNUP_STORE_NAME = 'SIGNUP';

import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../auth-verificate-email';

export const SIGNUP_API = {
  SIGNUP_FORM_UPLOAD: {
    ENDPOINT: '/auth/signup',
    METHOD: 'POST',
  },
};

export const SIGNUP_FORM_ALREADY_REGISTERED_PATH = LOGIN_ROUTE_PATH;

export const SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH =
  AUTH_VERIFICATE_EMAIL_ROUTE_PATH;
