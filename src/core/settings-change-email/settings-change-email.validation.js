import { validate } from '../../main/validate/validate.core';
import {
  email,
  maxLength,
  minLength,
  required,
} from '../../main/validate/validate.service';

import { SETTINGS_CHANGE_EMAIL_FIELD_NAME } from './settings-change-email.type';

const config = {
  [SETTINGS_CHANGE_EMAIL_FIELD_NAME.EMAIL]: [required, email],
  [SETTINGS_CHANGE_EMAIL_FIELD_NAME.PASSWORD]: [
    required,
    minLength(8),
    maxLength(100),
  ],
};

export const settingsChangeEmailFormValidation = (values) =>
  validate(values, config);
