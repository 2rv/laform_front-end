export const AUTH_CHANGE_EMAIL_ROUTE_PATH = '/auth/change-email';
export const AUTH_CHANGE_EMAIL_STORE_NAME = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_EMAIL_API = {
  ENDPOINT: (code) => `/user/verification/change-email/${code}`,
  METHOD: 'GET',
};
