import { validate } from '../../main/validate/validate.core';
import { phone, required } from '../../main/validate/validate.service';
import { SETTINGS_USER_INFO_FIELD_NAME } from './settings-user-info.type';
const config = {
  [SETTINGS_USER_INFO_FIELD_NAME.FULLNAME]: [],
  [SETTINGS_USER_INFO_FIELD_NAME.PHONE]: [required, phone],
};
export const settingsUserInfoValidation = (values) => validate(values, config);
