import { validate } from '../../main/validate/validate.core';
import {
  required,
  number,
  minLength,
  numberPositive,
} from '../../main/validate/validate.service';

import { PRODUCT_FIELD_NAME } from './create-product.type';

const config = {
  [PRODUCT_FIELD_NAME.NAME]: [required, minLength(3)],
  [PRODUCT_FIELD_NAME.MODIFIER]: [],
  [PRODUCT_FIELD_NAME.DESCRIPTION]: [required],
  [PRODUCT_FIELD_NAME.ONE_CATEGORY]: [required],
  [PRODUCT_FIELD_NAME.ONE_POSITION_NAME]: [required],
  [PRODUCT_FIELD_NAME.ONE_POSITION_PRICE]: [required],
  [PRODUCT_FIELD_NAME.PRICE]: [number],
  [PRODUCT_FIELD_NAME.DISCOUNT]: [number],
};

export const createProuctValidation = (values) => validate(values, config);
