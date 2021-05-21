import { text } from '../../lib/common/text';

import { LOGIN_FIELD_NAME } from './login.type';

export function loginFormValidation(values) {
  const errors = {};

  if (!values[LOGIN_FIELD_NAME.LOGIN]) {
    errors[LOGIN_FIELD_NAME.LOGIN] = text('VALIDATION.REQUIRED');
  }

  if (!values[LOGIN_FIELD_NAME.PASSWORD]) {
    errors[LOGIN_FIELD_NAME.PASSWORD] = text('VALIDATION.REQUIRED');
  }

  return errors;
}
