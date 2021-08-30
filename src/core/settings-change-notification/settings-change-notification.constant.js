export const SETTINGS_CHANGE_NOTIFICATION_STORE_NAME =
  'SETTINGS_CHANGE_NOTIFICATION';

export const SETTINGS_CHANGE_NOTIFICATION_API = {
  UPLOAD_FORM: {
    ENDPOINT: 'notification/subscribe-authtorized',
    METHOD: 'POST',
  },
  LOAD_NOTIFICATION: {
    ENDPOINT: 'notification/subscribe-status',
    METHOD: 'GET',
  },
};
