import { validate } from '../../main/validate/validate.core';
import { email, phone, required } from '../../main/validate/validate.service';

import { ORDER_FIELD_NAME } from './basket.type';

const config = {
  [ORDER_FIELD_NAME.EMAIL]: [required, email],
  [ORDER_FIELD_NAME.FULL_NAME]: [required],
  [ORDER_FIELD_NAME.CITY]: [required],
  [ORDER_FIELD_NAME.PHONE]: [required, phone],
  [ORDER_FIELD_NAME.PAYMENT_METHOD]: [],
  [ORDER_FIELD_NAME.DELIVERY_METHOD]: [],
  [ORDER_FIELD_NAME.DESCRIPTION]: [],
  [ORDER_FIELD_NAME.PRICE]: [],
  [ORDER_FIELD_NAME.PROMO_DISCOUNT]: [],
  [ORDER_FIELD_NAME.PROMO_CODE]: [],
  [ORDER_FIELD_NAME.DILIVERY_PRICE]: [],
  [ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE]: [required],
};

export const formValidation = (values) => validate(values, config);
