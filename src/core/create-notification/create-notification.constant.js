import { HOME_ROUTE_PATH } from '../../core/home';
export const CREATE_NOTIFICATION_ROUTE_PATH = 'notification/create';
export const CREATE_NOTIFICATION_STORE_NAME = 'NOTIFICATION_STORE_NAME';
export const CREATE_NOTIFICATION_REDIRECT_ON_UPLOAD_PATH = HOME_ROUTE_PATH;
export const CREATE_NOTIFICATION_API = {
  CREATE_NOTIFICATION_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/mail/notification',
  },
};
