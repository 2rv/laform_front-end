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
import {
  dynamicFieldsValidationNameParam,
  dynamicFieldsValidationNamePriceCount,
} from 'src/lib/common/create-product-helpers';

const config = {
  [SEWING_GOODS_FIELD_NAME.NAME]: [required, minLength(3)],
  [SEWING_GOODS_FIELD_NAME.MODIFIER]: [],
  [SEWING_GOODS_FIELD_NAME.CATEGORIES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [SEWING_GOODS_FIELD_NAME.DESCRIPTION]: [required],
  [SEWING_GOODS_FIELD_NAME.IMAGES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [SEWING_GOODS_FIELD_NAME.DISCOUNT]: [
    number,
    numberPositive,
    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
};

export const formValidation = (values) => {
  const dynamicFieldsSizesErrors = dynamicFieldsValidationNamePriceCount(
    values[SEWING_GOODS_FIELD_NAME.SIZES],
    SEWING_GOODS_FIELD_NAME.SIZES,
    SEWING_GOODS_FIELD_NAME.SIZE_NAME,
    SEWING_GOODS_FIELD_NAME.SIZE_PRICE,
    SEWING_GOODS_FIELD_NAME.COUNT,
  );

  const dynamicFieldsColorsErrors = dynamicFieldsValidationNameParam(
    values[SEWING_GOODS_FIELD_NAME.COLORS],
    SEWING_GOODS_FIELD_NAME.COLORS,
    SEWING_GOODS_FIELD_NAME.COLOR_NAME,
  );
  const fieldErrors = validate(values, config);
  return {
    ...fieldErrors,
    ...dynamicFieldsSizesErrors,
    ...dynamicFieldsColorsErrors,
  };
};
