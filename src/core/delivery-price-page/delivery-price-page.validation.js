import { validate } from '../../main/validate/validate.core';
import { required, onlyNumber } from '../../main/validate/validate.service';

import { DELIVERY_PRICE_FORM_DATA_NAME } from './delivery-price-page.constant';

const config = {
  [DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE]: [required],
  [DELIVERY_PRICE_FORM_DATA_NAME.DELIVERY_TYPE_PRICE]: [required, onlyNumber],
};

export const deliveryPriceFormValidation = (values) => validate(values, config);
