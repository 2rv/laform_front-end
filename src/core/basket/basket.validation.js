import { validate } from '../../main/validate/validate.core';
import { phone, required } from '../../main/validate/validate.service';

import { ORDER_FIELD_NAME } from './basket.type';

const config = {
  [ORDER_FIELD_NAME.FULL_NAME]: [required],
  [ORDER_FIELD_NAME.DESCRIPTION]: [],
  [ORDER_FIELD_NAME.CITY]: [required],
  [ORDER_FIELD_NAME.PHONE]: [required, phone],
};

const promoCodeConfig = {
  [ORDER_FIELD_NAME.PROMO_CODE]: [],
};

export const formValidation = (values) => validate(values, config);

export const promoCodeValidation = (values) =>
  validate(values, promoCodeConfig);
