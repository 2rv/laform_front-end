import { LOGIN_DATA_NAME, LOGIN_FIELD_NAME } from './login.type';

export const convertLoginFormData = (data) => ({
  [LOGIN_DATA_NAME.LOGIN]: data[LOGIN_FIELD_NAME.LOGIN].trim(),
  [LOGIN_DATA_NAME.PASSWORD]: data[LOGIN_FIELD_NAME.PASSWORD],
});
