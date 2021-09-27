import { dynamicFieldsValidationNamePriceFile } from 'src/lib/common/create-product-helpers';
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
import { ELECTRONIC_PATTERN_FIELD_NAME } from './patterns-create-electronic.type';

const config = {
  [ELECTRONIC_PATTERN_FIELD_NAME.NAME]: [required, minLength(3)],
  [ELECTRONIC_PATTERN_FIELD_NAME.MODIFIER]: [],
  [ELECTRONIC_PATTERN_FIELD_NAME.CATEGORIES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [ELECTRONIC_PATTERN_FIELD_NAME.DESCRIPTION]: [required],
  [ELECTRONIC_PATTERN_FIELD_NAME.IMAGES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT]: [
    number,
    numberPositive,
    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
  [ELECTRONIC_PATTERN_FIELD_NAME.COMPLEXITY]: [],
};

export const formValidation = (values) => {
  const dynamicFieldsSizesErrors = dynamicFieldsValidationNamePriceFile(
    values[ELECTRONIC_PATTERN_FIELD_NAME.SIZES],
    ELECTRONIC_PATTERN_FIELD_NAME.SIZES,
    ELECTRONIC_PATTERN_FIELD_NAME.SIZE_NAME,
    ELECTRONIC_PATTERN_FIELD_NAME.SIZE_PRICE,
    ELECTRONIC_PATTERN_FIELD_NAME.FILE,
  );

  const fieldErrors = validate(values, config);
  return {
    ...fieldErrors,
    ...dynamicFieldsSizesErrors,
  };
};
