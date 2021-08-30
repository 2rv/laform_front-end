import { validate } from '../../main/validate/validate.core';
import {
  email,
  password,
  required,
} from '../../main/validate/validate.service';

import { SETTINGS_CHANGE_EMAIL_FIELD_NAME } from './settings-change-email.type';

const config = {
  [SETTINGS_CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]: [email, required],
  [SETTINGS_CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]: [email, required],
  [SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD]: [required],
};

export const settingsChangeEmailFormValidation = (values) =>
  validate(values, config);
