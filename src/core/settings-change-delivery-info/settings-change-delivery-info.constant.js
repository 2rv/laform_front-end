import { HOME_ROUTE_PATH } from '../home';

export const SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH =
  '/settings/change-delivery-info';
// export const SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH_DYNAMIC = () => '/settings/change-delivery-info';

export const SETTINGS_CHANGE_DELIVERY_INFO_STORE_NAME =
  'SETTINGS_CHANGE_DELIVERY_INFO';

export const SETTINGS_CHANGE_DELIVERY_INFO_API = {
  GET_INFO: {
    ENDPOINT: '/user/delivery/info',
    METHOD: 'GET',
  },
  UPDATE_INFO: {
    ENDPOINT: '/user/delivery/info',
    METHOD: 'PATCH',
  },
};

export const SETTINGS_CHANGE_DELIVERY_INFO_DELIVERY_TYPE_OPTIONS = [
  {
    id: 1,
    tid: 'SETTINGS.CHANGE_DELIVERY_INFO.DELIVERY_TYPE.ON_THE_POINT',
  },
  {
    id: 2,
    tid: 'SETTINGS.CHANGE_DELIVERY_INFO.DELIVERY_TYPE.COURIER',
  },
];

export const SETTINGS_CHANGE_DELIVERY_INFO_REDIRECT_GUEST = HOME_ROUTE_PATH;
