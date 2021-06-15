import { AUTH_VERIFICATE_EMAIL_ROUTE_PATH } from '../auth-verificate-email/auth-verificate-email.constant';
import { HOME_ROUTE_PATH } from '../home';

export const AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH =
  '/auth/verificate-email/confirm';
// export const AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH_DYNAMIC = () => '/auth/verificate-email/confirm';

export const AUTH_VERIFICATE_EMAIL_CONFIRM_STORE_NAME = 'AUTH_VERIFICATE_EMAIL';

export const AUTH_VERIFICATE_EMAIL_CONFIRM_API = {
  ENDPOINT: (code) => `/user/verification/email/${code}`,
  METHOD: 'POST',
};

export const AUTH_VERIFICATE_EMAIL_CONFIRM_GUEST_REDIRECT = HOME_ROUTE_PATH;
export const AUTH_VERIFICATE_EMAIL_CONFIRM_PURCHASES_ROUTE = HOME_ROUTE_PATH;
export const AUTH_VERIFICATE_EMAIL_CONFIRM_REDIRECT_ON_NO_CODE =
  AUTH_VERIFICATE_EMAIL_ROUTE_PATH;
