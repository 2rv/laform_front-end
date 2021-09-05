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
  // рекомендации
  [ELECTRONIC_PATTERN_FIELD_NAME.DISCOUNT]: [
    number,
    numberPositive,
    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
  [ELECTRONIC_PATTERN_FIELD_NAME.COMPLEXITY]: [],
  [ELECTRONIC_PATTERN_FIELD_NAME.FILE]: [required],
  [ELECTRONIC_PATTERN_FIELD_NAME.PRICE]: [
    required,
    number,
    numberPositive,
    numberPositiveMin(0),
  ],
};
export const formValidation = (values) => validate(values, config);
