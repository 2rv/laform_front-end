import {
  NOTIFICATION_DATA_NAME,
  NOTIFICATION_FIELD_NAME,
  NOTIFICATION_DATA_KEY,
} from './notification.type';

export const convertNotificationFormData = (data) => ({
  [NOTIFICATION_DATA_NAME.EMAIL]: data[NOTIFICATION_FIELD_NAME.EMAIL],
});

export const performNotificationLoadEmailData = (data) => ({
  [NOTIFICATION_DATA_KEY.EMAIL]: data[NOTIFICATION_DATA_NAME.EMAIL],
});
