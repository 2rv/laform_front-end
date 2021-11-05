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
import { CREATE_MASTER_CLASS_FIELD_NAME } from './master-class-create.type';

const config = {
  [CREATE_MASTER_CLASS_FIELD_NAME.NAME]: [required, minLength(3)],
  [CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]: [],
  [CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]: [required],
  [CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]: [
    required,
    requiredArray,
    minLengthArray(1),
  ],
  [CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]: [
    number,
    numberPositive,
    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
  [CREATE_MASTER_CLASS_FIELD_NAME.PRICE]: [
    number,
    numberPositive,
    numberPositiveMin(0),
  ],
  [CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL]: [required],
};

export const formValidation = (values) => validate(values, config);
