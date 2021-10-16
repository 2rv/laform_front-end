import {
  SETTINGS_CHANGE_NOTIFICATION_DATA_NAME,
  SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME,
  SETTINGS_CHANGE_NOTIFICATION_DATA_KEY,
} from './settings-change-notification.type';

export const convertSettingsChangeNotificationFormData = (data) => ({
  [SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME.NOTIFICATION]:
    data[SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME.NOTIFICATION],
});

export const performSettingsChangeNotificationLoadData = (notificationEmail) => ({
  [SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME.NOTIFICATION]: notificationEmail,
});
