import { validate } from '../../main/validate/validate.core';
import {
  required,
  number,
  minLength,
  numberPositive,
  numberPositiveMin,
  numberPositiveMax,
  requiredArray,
} from '../../main/validate/validate.service';
import {
  MasterClassValues,
  MASTER_CLASS_FIELD_NAME,
} from './master-class-create.type';

const config = {
  [MASTER_CLASS_FIELD_NAME.NAME]: [required, minLength(3)],
  [MASTER_CLASS_FIELD_NAME.VENDOR_CODE]: [],
  [MASTER_CLASS_FIELD_NAME.DESCRIPTION]: [required],
  [MASTER_CLASS_FIELD_NAME.MODIFIER]: [],
  [MASTER_CLASS_FIELD_NAME.DISCOUNT]: [
    number,
    numberPositive,
    numberPositiveMin(0),
    numberPositiveMax(100),
  ],
  [MASTER_CLASS_FIELD_NAME.PRICE]: [
    number,
    numberPositive,
    numberPositiveMin(0),
  ],
  [MASTER_CLASS_FIELD_NAME.IMAGES]: [requiredArray],
  [MASTER_CLASS_FIELD_NAME.CATEGORIES]: [],
  [MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]: [],
  [MASTER_CLASS_FIELD_NAME.ARTICLE]: [required],
  [MASTER_CLASS_FIELD_NAME.MATERIAL]: [required],
  [MASTER_CLASS_FIELD_NAME.IS_PUBLIC]: [],
  [MASTER_CLASS_FIELD_NAME.IN_ENGLISH]: [],
};

export const masterClassValidate = (values: MasterClassValues) =>
  validate(values, config);
