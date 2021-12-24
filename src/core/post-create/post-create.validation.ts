import { validate } from 'src/main/validate/validate.core';
import {
  required,
  minLength,
  requiredArray,
} from 'src/main/validate/validate.service';
import { POST_FIELD_NAME, PostValues } from './post-create.type';

const config = {
  [POST_FIELD_NAME.IMAGES]: [required, requiredArray],
  [POST_FIELD_NAME.NAME]: [required, minLength(3)],
  [POST_FIELD_NAME.MODIFIER]: [],
  [POST_FIELD_NAME.VENDOR_CODE]: [],
  [POST_FIELD_NAME.CATEGORIES]: [],
  [POST_FIELD_NAME.POST]: [],
  [POST_FIELD_NAME.RECOMMENDATIONS]: [],
  [POST_FIELD_NAME.IS_PUBLIC]: [],
  [POST_FIELD_NAME.IN_ENGLISH]: [],
};

export const postValidate = (values: PostValues) => validate(values, config);
