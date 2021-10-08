import { validate } from '../../main/validate/validate.core';
import {
  required,
  number,
  minLength,
  numberPositive,
  numberPositiveMin,
  numberPositiveMax,
  requiredArray,
  minLengthArray,
} from '../../main/validate/validate.service';
import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';
import { productOptionValidation } from 'src/lib/common/create-product-validation';

const config = {
  [SEWING_GOODS_FIELD_NAME.NAME]: [required, minLength(3)],
  [SEWING_GOODS_FIELD_NAME.MODIFIER]: [],
  [SEWING_GOODS_FIELD_NAME.CATEGORIES]: [],
  [SEWING_GOODS_FIELD_NAME.DESCRIPTION]: [required],
  [SEWING_GOODS_FIELD_NAME.IMAGES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS]: [],
  [SEWING_GOODS_FIELD_NAME.OPTIONS]: [productOptionValidation()],
};

export const formValidation = (values) => validate(values, config);
