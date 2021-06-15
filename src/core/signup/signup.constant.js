import { LOGIN_ROUTE_PATH } from '../login';
import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../auth-verificate-email';

export const SIGNUP_ROUTE_PATH = '/signup';
// export const SIGNUP_ROUTE_PATH_DYNAMIC = () => '/signup';

export const SIGNUP_STORE_NAME = 'SIGNUP';

export const SIGNUP_API = {
  SIGNUP_FORM_UPLOAD: {
    ENDPOINT: '/auth/signup',
    METHOD: 'POST',
  },
};

export const SIGNUP_FORM_ALREADY_REGISTERED_PATH = LOGIN_ROUTE_PATH;
export const SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH =
  AUTH_VERIFICATE_EMAIL_ROUTE_PATH;

export const SIGNUP_REDIRECT_ON_LOGGED = '/logout';
