import { validate } from '../../main/validate/validate.core';
import {
  email,
  required,
  boolean,
  phone,
  getError,
} from '../../main/validate/validate.service';
import { USER_INFO_FIELD_NAME } from '../settings-user-info';
import { formikValues, ORDER_FIELD_NAME } from './basket.type';

const requiredPoint = (value: any) => {
  if (!Boolean(value?.label)) {
    return getError('Необходимо выбрать точку выдачи');
  }
  return null;
};
const requiredTariff = (value: any) => {
  if (!Boolean(value?.label)) {
    return getError('Необходимо выбрать тариф');
  }
  return null;
};

const configElectronic = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [USER_INFO_FIELD_NAME.FULL_NAME]: [required],
  [USER_INFO_FIELD_NAME.PHONE]: [required, phone],
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: [boolean],
};

const configPrint = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [USER_INFO_FIELD_NAME.FULL_NAME]: [required],
  [USER_INFO_FIELD_NAME.PHONE]: [required, phone],
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: [boolean],
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
