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
import { PRINT_PATTERN_FIELD_NAME } from './patterns-create-print.type';
import { dynamicFieldsValidation } from 'src/lib/common/create-product-helpers';

const config = {
  [PRINT_PATTERN_FIELD_NAME.NAME]: [required, minLength(3)],
  [PRINT_PATTERN_FIELD_NAME.MODIFIER]: [],
  [PRINT_PATTERN_FIELD_NAME.CATEGORIES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [PRINT_PATTERN_FIELD_NAME.DESCRIPTION]: [required],
  [PRINT_PATTERN_FIELD_NAME.IMAGES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [PRINT_PATTERN_FIELD_NAME.DISCOUNT]: [
    number,
    numberPositive,
    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
  [PRINT_PATTERN_FIELD_NAME.COMPLEXITY]: [],
  [PRINT_PATTERN_FIELD_NAME.MATERIAL]: [required],
};

export const formValidation = (values) => {
  const dynamicFieldsErrors = dynamicFieldsValidation(
    values[PRINT_PATTERN_FIELD_NAME.SIZES],
    PRINT_PATTERN_FIELD_NAME.SIZES,
    PRINT_PATTERN_FIELD_NAME.SIZE_NAME,
    PRINT_PATTERN_FIELD_NAME.SIZE_PRICE,
  );
  const fieldErrors = validate(values, config);
  return {
    ...dynamicFieldsErrors,
    ...fieldErrors,
  };
};
