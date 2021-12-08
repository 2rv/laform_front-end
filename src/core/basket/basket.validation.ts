import { validate } from '../../main/validate/validate.core';
import {
  email,
  required,
  phone,
  requiredPoint,
  requiredTariff,
  requiredEmail,
} from '../../main/validate/validate.service';
import { USER_INFO_FIELD_NAME } from '../settings-user-info';
import { formikValues, ORDER_FIELD_NAME } from './basket.type';

const configElectronic = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [USER_INFO_FIELD_NAME.FULL_NAME]: [required],
  [USER_INFO_FIELD_NAME.PHONE]: [required, phone],
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: [requiredEmail],
};

const configPrint = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [USER_INFO_FIELD_NAME.FULL_NAME]: [required],
  [USER_INFO_FIELD_NAME.PHONE]: [required, phone],
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: [requiredEmail],
  [ORDER_FIELD_NAME.SDEK_POINT]: [requiredPoint],
  [ORDER_FIELD_NAME.SDEK_TARIFF]: [requiredTariff],
};

export const formValidation = (isSdek: boolean) => (values: formikValues) => {
  if (isSdek) {
    return validate(values, configPrint);
  } else {
    return validate(values, configElectronic);
  }
};
