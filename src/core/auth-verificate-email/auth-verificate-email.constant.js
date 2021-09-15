// import { FAQ_PAGE_ROUTE_PATH } from '../faq-page';
// import { SETTINGS_ROUTE_PATH } from '../settings';

export const AUTH_VERIFICATE_EMAIL_ROUTE_PATH = '/auth/verificate-email';
export const AUTH_VERIFICATE_EMAIL_ROUTE_PATH_DYNAMIC = () =>
  '/auth/verificate-email';

export const AUTH_VERIFICATE_EMAIL_STORE_NAME = 'AUTH_VERIFICATE_EMAIL';

export const AUTH_VERIFICATE_EMAIL_API = {
  ENDPOINT: '/user/verification/email',
  METHOD: 'POST',
};

export const AUTH_VERIFICATE_EMAIL_GUEST_REDIRECT = '/';
// export const AUTH_VERIFICATE_EMAIL_HELP_ROUTE = FAQ_PAGE_ROUTE_PATH;
// export const AUTH_VERIFICATE_EMAIL_WRONG_EMAIL = SETTINGS_ROUTE_PATH;
