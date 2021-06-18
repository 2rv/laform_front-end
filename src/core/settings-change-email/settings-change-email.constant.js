import { HOME_ROUTE_PATH } from '../home';

export const SETTINGS_CHANGE_EMAIL_ROUTE_PATH = '/settings/change-email';
// export const SETTINGS_CHANGE_EMAIL_ROUTE_PATH_DYNAMIC = () => '/settings/change-email';

export const SETTINGS_CHANGE_EMAIL_STORE_NAME = 'SETTINGS_CHANGE_EMAIL';

export const SETTINGS_CHANGE_EMAIL_API = {
  GET_EMAIL: {
    ENDPOINT: '/user/settings/email',
    METHOD: 'GET',
  },
  UPDATE_EMAIL: {
    ENDPOINT: '/user/settings/email',
    METHOD: 'PATCH',
  },
};

export const SETTINGS_CHANGE_EMAIL_REDIRECT_GUEST = HOME_ROUTE_PATH;
