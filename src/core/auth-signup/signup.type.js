import { SIGNUP_FORM_FIELD_KEY } from './frames/signup-form';

export const SIGNUP_FIELD_NAME = {
  LOGIN: 'login',
  EMAIL: 'email',
  PASSWORD: 'password',
  PASSWORD_REPEAT: 'passwordRepeat',
};

export const SIGNUP_FORM_FIELD_NAME = {
  [SIGNUP_FORM_FIELD_KEY.LOGIN]: SIGNUP_FIELD_NAME.LOGIN,
  [SIGNUP_FORM_FIELD_KEY.EMAIL]: SIGNUP_FIELD_NAME.EMAIL,
  [SIGNUP_FORM_FIELD_KEY.PASSWORD]: SIGNUP_FIELD_NAME.PASSWORD,
  [SIGNUP_FORM_FIELD_KEY.PASSWORD_REPEAT]: SIGNUP_FIELD_NAME.PASSWORD_REPEAT,
};

export const SIGNUP_DATA_NAME = {
  LOGIN: 'login',
  EMAIL: 'email',
  PASSWORD: 'password',
};

export const SIGNUP_ACTION_TYPE = {
  SIGNUP_FORM_UPLOAD_PENDING: 'SIGNUP_ACTION_TYPE.AUTH_FORM_UPLOAD_PENDING',
  SIGNUP_FORM_UPLOAD_SUCCESS: 'SIGNUP_ACTION_TYPE.AUTH_FORM_UPLOAD_SUCCESS',
  SIGNUP_FORM_UPLOAD_ERROR: 'SIGNUP_ACTION_TYPE.AUTH_FORM_UPLOAD_ERROR',
};