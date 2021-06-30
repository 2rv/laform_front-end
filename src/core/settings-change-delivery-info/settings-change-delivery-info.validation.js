import { validate } from '../../main/validate/validate.core';
import { phone } from '../../main/validate/validate.service';

import { SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME } from './settings-change-delivery-info.type';

const config = {
  [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.FULLNAME]: [],
  [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.PHONE]: [phone],
  [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.LOCATION]: [],
  [SETTINGS_CHANGE_DELIVERY_INFO_FIELD_NAME.DELIVERY_TYPE]: [],
};

export const settingsChangeDeliveryInfoFormValidation = (values) =>
  validate(values, config);
