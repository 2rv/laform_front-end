import {
  SETTINGS_CHANGE_EMAIL_DATA_NAME,
  SETTINGS_CHANGE_EMAIL_FIELD_NAME,
} from './settings-change-email.type';

export const convertSettingsChangeEmailFormData = (data) => ({
  [SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL]:
    data[SETTINGS_CHANGE_EMAIL_FIELD_NAME.EMAIL],
  [SETTINGS_CHANGE_EMAIL_DATA_NAME.PASSWORD]:
    data[SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD],
});

export const performSettingsChangeEmailFormData = (data) => ({
  [SETTINGS_CHANGE_EMAIL_FIELD_NAME.EMAIL]:
    data[SETTINGS_CHANGE_EMAIL_DATA_NAME.EMAIL],
});
