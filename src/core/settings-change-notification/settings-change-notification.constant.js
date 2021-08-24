export const SETTINGS_CHANGE_NOTIFICATION_STORE_NAME =
  'SETTINGS_CHANGE_NOTIFICATION';

export const SETTINGS_CHANGE_NOTIFICATION_API = {
  UPLOAD_FORM: {
    ENDPOINT: 'user/settings/subscribe',
    METHOD: 'PATCH',
  },
  LOAD_NOTIFICATION: {
    ENDPOINT: 'user/subscription',
    METHOD: 'GET',
  },
};
