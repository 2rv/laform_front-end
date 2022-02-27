import { validate } from 'src/main/validate/validate.core';
import { required, minLength } from 'src/main/validate/validate.service';
import {
  PatternValues,
  PATTERN_CREATE_FIELD_NAME,
} from './pattern-create.type';

const config = {
  [PATTERN_CREATE_FIELD_NAME.NAME]: [required, minLength(3)],
  [PATTERN_CREATE_FIELD_NAME.IMAGES]: [],
};

export const patternValidate = (values: PatternValues) =>
  validate(values, config);
