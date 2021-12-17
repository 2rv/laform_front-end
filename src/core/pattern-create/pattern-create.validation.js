import { validate } from '../../main/validate/validate.core';
import {
  required,
  minLength,
  requiredArray,
  minLengthArray,
} from '../../main/validate/validate.service';
import { CREATE_PATTERN_FIELD_NAME } from './pattern-create.type';

const config = {
  [CREATE_PATTERN_FIELD_NAME.NAME]: [required, minLength(3)],
  [CREATE_PATTERN_FIELD_NAME.MODIFIER]: [],
  [CREATE_PATTERN_FIELD_NAME.CATEGORIES]: [],
  [CREATE_PATTERN_FIELD_NAME.DESCRIPTION]: [],
  [CREATE_PATTERN_FIELD_NAME.IMAGES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [CREATE_PATTERN_FIELD_NAME.COMPLEXITY]: [],
  [CREATE_PATTERN_FIELD_NAME.MATERIAL]: [],
  [CREATE_PATTERN_FIELD_NAME.OPTIONS]: [],
  [CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS]: [],
};

export const formValidation = (values) => validate(values, config);
