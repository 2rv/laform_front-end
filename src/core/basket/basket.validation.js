import { validate } from '../../main/validate/validate.core';
import { phone, required } from '../../main/validate/validate.service';

import { FORMALIZATION_ORDERING_FIELD_NAME } from './basket.type';

const config = {
  [FORMALIZATION_ORDERING_FIELD_NAME.FULL_NAME]: [required],
  [FORMALIZATION_ORDERING_FIELD_NAME.ORDER_NOTE]: [],
  [FORMALIZATION_ORDERING_FIELD_NAME.CURRENT_CITY]: [required],
  [FORMALIZATION_ORDERING_FIELD_NAME.CONTACT_PHONE_NUMBER]: [required, phone],
};

export const basketFormValidation = (values) => validate(values, config);
