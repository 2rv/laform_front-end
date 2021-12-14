import { validate } from '../../main/validate/validate.core';
import {
  required,
  requiredArray,
  minLengthArray,
} from '../../main/validate/validate.service';
import { FEEDBACK_FIELD_NAME } from './feedback.type';

const config = {
  [FEEDBACK_FIELD_NAME.DESCRIPTION]: [required],
};

export const formValidation = (values) => validate(values, config);
