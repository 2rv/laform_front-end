import { validate } from 'src/main/validate/validate.core';
import { required } from 'src/main/validate/validate.service';
import { LOGIN_FIELD_NAME, LoginValues } from './login.type';

const config = {
  [LOGIN_FIELD_NAME.LOGIN]: [required],
  [LOGIN_FIELD_NAME.PASSWORD]: [required],
};

export const loginValidate = (values: LoginValues) => validate(values, config);
