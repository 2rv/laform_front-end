import { HOME_ROUTE_PATH } from '../home';

export const SETTINGS_CHANGE_PASSWORD_ROUTE_PATH = '/settings/change-password';
// export const AUTH_CHANGE_PASSWORD_ROUTE_PATH_DYNAMIC = () => '/settings/change-password';

export const SETTINGS_CHANGE_PASSWORD_STORE_NAME = 'SETTINGS_CHANGE_PASSWORD';

export const SETTINGS_CHANGE_PASSWORD_API = {
  ENDPOINT: '/user/settings/password',
  METHOD: 'PATCH',
};

export const SETTINGS_CHANGE_PASSWORD_REDIRECT_GUEST = HOME_ROUTE_PATH;
