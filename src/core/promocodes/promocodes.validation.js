import { validate } from '../../main/validate/validate.core';
import {
  required,
  minLength,
  numberPositiveMin,
  numberPositiveMax,
} from '../../main/validate/validate.service';
import { PROMOCODE_FIELD_NAME } from './promocodes.type';

const config = {
  [PROMOCODE_FIELD_NAME.PROMOCODE]: [required, minLength(6)],
  [PROMOCODE_FIELD_NAME.DISCOUNT]: [
    required,
    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
};

export const promocodeFormValidation = (values) => validate(values, config);
