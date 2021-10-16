export const NOTIFICATION_STORE_NAME = 'NOTIFICATION';

export const NOTIFICATION_API = {
  NOTIFICATION_FORM_UPLOAD: {
    ENDPOINT: (userId) => `user/update/${userId}`,
    METHOD: 'PUT',
  },
  LOAD_NOTIFICATION: {
    ENDPOINT: 'user/notification-email',
    METHOD: 'GET',
  },
};
