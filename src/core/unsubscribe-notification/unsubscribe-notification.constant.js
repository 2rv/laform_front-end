export const UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH = '/unsubscribe-notification';

export const UNSUBSCRIBE_NOTIFICATION_STORE_NAME = 'UNSUBSCRIBE_NOTIFICATION';

export const UNSUBSCRIBE_NOTIFICATION_API = {
  UNSUBSCRIBE_NOTIFICATION: {
    ENDPOINT: (code) => `/user/unsubscribe-notification?code=${code}`,
    TYPE: 'PUT',
  },
};
