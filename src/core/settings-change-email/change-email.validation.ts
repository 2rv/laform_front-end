import { validate } from 'src/main/validate/validate.core';
import { email, required } from 'src/main/validate/validate.service';
import {
  changeEmailValues,
  CHANGE_EMAIL_FIELD_NAME,
} from './change-email.type';
const config = {
  [CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]: [email, required],
  [CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]: [email, required],
  [CHANGE_EMAIL_FIELD_NAME.PASSWORD]: [required],
};
export const validation = (values: changeEmailValues) =>
  validate(values, config);

const configConfirm = {
  [CHANGE_EMAIL_FIELD_NAME.OLD_EMAIL]: [email, required],
  [CHANGE_EMAIL_FIELD_NAME.NEW_EMAIL]: [email, required],
  [CHANGE_EMAIL_FIELD_NAME.PASSWORD]: [required],
  [CHANGE_EMAIL_FIELD_NAME.CODE_NEW_EMAIL]: [required],
  [CHANGE_EMAIL_FIELD_NAME.CODE_OLD_EMAIL]: [],
};

export const validationConfirm = (values: changeEmailValues) =>
  validate(values, configConfirm);
