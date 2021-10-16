export const SETTINGS_CHANGE_NOTIFICATION_STORE_NAME =
  'SETTINGS_CHANGE_NOTIFICATION';

export const SETTINGS_CHANGE_NOTIFICATION_API = {
  USER_UPDATE_DATA: {
    ENDPOINT: (userId) => `user/update/${userId}`,
    METHOD: 'PUT',
  },
  LOAD_NOTIFICATION: {
    ENDPOINT: 'user/notification-email',
    METHOD: 'GET',
  },
};
