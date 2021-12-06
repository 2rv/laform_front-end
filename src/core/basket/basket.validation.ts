import { validate } from '../../main/validate/validate.core';
import {
  email,
  required,
  boolean,
  phone,
  getError,
} from '../../main/validate/validate.service';
import { formikValues, ORDER_FIELD_NAME } from './basket.type';

const configElectronic = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [ORDER_FIELD_NAME.FULL_NAME]: [required],
  [ORDER_FIELD_NAME.PHONE]: [required, phone],
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: [boolean],
};
const requiredPoint = (value: any) => {
  console.log(value);

  if (!Boolean(value?.label)) {
    return getError('Необходимо выбрать точку выдачи');
  }
  return null;
};
const requiredTariff = (value: any) => {
  console.log(value);
  if (!Boolean(value?.label)) {
    return getError('Необходимо выбрать тариф');
  }
  return null;
};
const configPrint = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [ORDER_FIELD_NAME.FULL_NAME]: [required],
  [ORDER_FIELD_NAME.PHONE]: [required, phone],
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
