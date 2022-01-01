import { validate } from 'src/main/validate/validate.core';
import {
  email,
  login,
  maxLength,
  minLength,
  passwordRepeat,
  required,
} from 'src/main/validate/validate.service';

import { SignupValues, SIGNUP_FIELD_NAME } from './signup.type';

const config = {
  [SIGNUP_FIELD_NAME.LOGIN]: [required, minLength(3), maxLength(16), login],
  [SIGNUP_FIELD_NAME.EMAIL]: [required, email],
  [SIGNUP_FIELD_NAME.PASSWORD]: [required, minLength(8), maxLength(100)],
  [SIGNUP_FIELD_NAME.PASSWORD_REPEAT]: [
    required,
    passwordRepeat(SIGNUP_FIELD_NAME.PASSWORD),
  ],
};

export const signupValidate = (values: SignupValues) =>
  validate(values, config);
