import { text } from '../../lib/common/text';

import { SIGNUP_FIELD_NAME } from './signup.type';

export function signupFormValidation(values) {
  const errors = {};

  if (!values[SIGNUP_FIELD_NAME.LOGIN]) {
    errors[SIGNUP_FIELD_NAME.LOGIN] = text('VALIDATION.REQUIRED');
  } else if (!/^[A-z0-9_]*$/.test(values[SIGNUP_FIELD_NAME.LOGIN])) {
    errors[SIGNUP_FIELD_NAME.LOGIN] = text('VALIDATION.LOGIN_INCORRECT');
  } else if (values[SIGNUP_FIELD_NAME.LOGIN].length < 3) {
    errors[SIGNUP_FIELD_NAME.LOGIN] = text('VALIDATION.LOGIN_TOO_SHORT');
  } else if (values[SIGNUP_FIELD_NAME.LOGIN].length > 16) {
    errors[SIGNUP_FIELD_NAME.LOGIN] = text('VALIDATION.LOGIN_TOO_LONG');
  }

  if (!values[SIGNUP_FIELD_NAME.EMAIL]) {
    errors[SIGNUP_FIELD_NAME.EMAIL] = text('VALIDATION.REQUIRED');
  }

  if (values[SIGNUP_FIELD_NAME.PASSWORD].length < 8) {
    errors[SIGNUP_FIELD_NAME.PASSWORD] = text('VALIDATION.PASSWORD_TOO_SHORT');
  } else if (
    values[SIGNUP_FIELD_NAME.PASSWORD] !==
    values[SIGNUP_FIELD_NAME.PASSWORD_REPEAT]
  ) {
    errors[SIGNUP_FIELD_NAME.PASSWORD] = text('VALIDATION.PASSWORD_NOT_MATCH');
  }

  return errors;
}
