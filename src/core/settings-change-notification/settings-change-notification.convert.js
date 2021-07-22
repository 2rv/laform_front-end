import {
  SETTINGS_CHANGE_NOTIFICATION_DATA_NAME,
  SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME,
  SETTINGS_CHANGE_NOTIFICATION_DATA_KEY,
} from './settings-change-notification.type';

export const convertSettingsChangeNotificationFormData = (data) => ({
  [SETTINGS_CHANGE_NOTIFICATION_DATA_NAME.NOTIFICATION]:
    data[SETTINGS_CHANGE_NOTIFICATION_FIELD_NAME.NOTIFICATION],
});

export const performSettingsChangeNotificationLoadData = (data) => ({
  [SETTINGS_CHANGE_NOTIFICATION_DATA_KEY.NOTIFICATION]:
    data[SETTINGS_CHANGE_NOTIFICATION_DATA_NAME.NOTIFICATION],
});
