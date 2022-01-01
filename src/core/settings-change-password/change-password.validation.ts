import { validate } from 'src/main/validate/validate.core';
import {
  maxLength,
  minLength,
  password,
  passwordRepeat,
  required,
} from 'src/main/validate/validate.service';
import {
  CHANGE_PASSWORD_FIELD_NAME,
  ChangePasswordValues,
} from './change-password.type';

const config = {
  [CHANGE_PASSWORD_FIELD_NAME.OLD_PASSWORD]: [required],
  [CHANGE_PASSWORD_FIELD_NAME.PASSWORD]: [
    required,
    password,
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
