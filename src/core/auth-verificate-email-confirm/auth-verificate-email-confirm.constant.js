export const AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH =
  '/auth/verificate-email/confirm/';

export const AUTH_VERIFICATE_EMAIL_CONFIRM_STORE_NAME =
  'AUTH_VERIFICATE_EMAIL_CONFIRM';

export const AUTH_VERIFICATE_EMAIL_CONFIRM_API = {
  ENDPOINT: (code) => `/user/verification/email/${code}`,
  METHOD: 'POST',
};
