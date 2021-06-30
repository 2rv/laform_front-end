import { validate } from '../../main/validate/validate.core';
import {
  maxLength,
  minLength,
  passwordRepeat,
  required,
} from '../../main/validate/validate.service';

import { SETTINGS_CHANGE_PASSWORD_FIELD_NAME } from './settings-change-password.type';

const config = {
  [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD]: [
    required,
    minLength(8),
    maxLength(100),
  ],
  [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: [
    required,
    minLength(8),
    maxLength(100),
  ],
  [SETTINGS_CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat(SETTINGS_CHANGE_PASSWORD_FIELD_NAME.PASSWORD),
  ],
};

export const settingsChangePasswordFormValidation = (values) =>
  validate(values, config);
