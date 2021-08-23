import { validate } from '../../main/validate/validate.core';
import { required, minLength, promocodeDiscountRange} from '../../main/validate/validate.service';
import { PROMOCODE_FIELD_NAME } from './promocodes.type';

const config = {
  [PROMOCODE_FIELD_NAME.PROMOCODE]: [required, minLength(6)],
  [PROMOCODE_FIELD_NAME.DISCOUNT]: [required, promocodeDiscountRange],
};

export const promocodeFormValidation = (values) => validate(values, config);
