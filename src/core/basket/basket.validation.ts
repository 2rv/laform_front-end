import { validate } from '../../main/validate/validate.core';
import {
  email,
  required,
  boolean,
  phone,
} from '../../main/validate/validate.service';
import { formikValues, ORDER_FIELD_NAME } from './basket.type';

const config = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [ORDER_FIELD_NAME.FULL_NAME]: [required],
  [ORDER_FIELD_NAME.PHONE]: [required, phone],
  [ORDER_FIELD_NAME.EMAIL_CONFIRMED]: [boolean],
};

export const formValidation = (values: formikValues) =>
  validate(values, config);
