import { validate } from '../../main/validate/validate.core';
import {
  maxLength,
  minLength,
  passwordRepeat,
  required,
} from '../../main/validate/validate.service';

import { AUTH_CHANGE_PASSWORD_FIELD_NAME } from './auth-change-password.type';

const config = {
  [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: [
    required,
    minLength(6),
    maxLength(100),
  ],
  [AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat(AUTH_CHANGE_PASSWORD_FIELD_NAME.PASSWORD),
  ],
};

export const authChangePasswordFormValidation = (values) =>
  validate(values, config);
