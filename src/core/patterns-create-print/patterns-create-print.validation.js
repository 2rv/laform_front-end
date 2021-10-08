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
import { productOptionValidation } from 'src/lib/common/create-product-validation';

const config = {
  [PRINT_PATTERN_FIELD_NAME.NAME]: [required, minLength(3)],
  [PRINT_PATTERN_FIELD_NAME.MODIFIER]: [],
  [PRINT_PATTERN_FIELD_NAME.CATEGORIES]: [],
  [PRINT_PATTERN_FIELD_NAME.DESCRIPTION]: [required],
  [PRINT_PATTERN_FIELD_NAME.IMAGES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [PRINT_PATTERN_FIELD_NAME.COMPLEXITY]: [],
  [PRINT_PATTERN_FIELD_NAME.MATERIAL]: [required],
  [PRINT_PATTERN_FIELD_NAME.OPTIONS]: [productOptionValidation()],
  [PRINT_PATTERN_FIELD_NAME.RECOMMENDATIONS]: [],
};

export const formValidation = (values) => validate(values, config);
