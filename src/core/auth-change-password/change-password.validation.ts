import { validate } from 'src/main/validate/validate.core';
import {
  maxLength,
  minLength,
  passwordRepeat,
  required,
} from 'src/main/validate/validate.service';
import {
  ChangePasswordValues,
  CHANGE_PASSWORD_FIELD_NAME,
} from './change-password.type';

const config = {
  [CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: [
    required,
    minLength(8),
    maxLength(100),
  ],
  [CHANGE_PASSWORD_FIELD_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat(CHANGE_PASSWORD_FIELD_NAME.PASSWORD),
  ],
};

export const changePassworValidation = (values: ChangePasswordValues) =>
  validate(values, config);
