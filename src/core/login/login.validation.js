import { validate } from '../../main/validate/validate.core';
import { required, loginOrEmail } from '../../main/validate/validate.service';

import { LOGIN_FIELD_NAME } from './login.type';

const config = {
  [LOGIN_FIELD_NAME.LOGIN]: [required],
  [LOGIN_FIELD_NAME.PASSWORD]: [required],
};

export const loginFormValidation = (values) => validate(values, config);
