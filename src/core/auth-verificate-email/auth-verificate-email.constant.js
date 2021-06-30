import { HOME_ROUTE_PATH } from '../home';

export const AUTH_VERIFICATE_EMAIL_ROUTE_PATH = '/auth/verificate-email';
// export const AUTH_VERIFICATE_EMAIL_ROUTE_PATH_DYNAMIC = () => '/auth/recovery-account';

export const AUTH_VERIFICATE_EMAIL_STORE_NAME = 'AUTH_VERIFICATE_EMAIL';

export const AUTH_VERIFICATE_EMAIL_API = {
  ENDPOINT: '/user/verification/email',
  METHOD: 'POST',
};

export const AUTH_VERIFICATE_EMAIL_GUEST_REDIRECT = HOME_ROUTE_PATH;
export const AUTH_VERIFICATE_EMAIL_HELP_ROUTE = '#';
