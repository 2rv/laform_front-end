import { validate } from '../../main/validate/validate.core';
import { email, required } from '../../main/validate/validate.service';

import { SUBSCRIBE_FIELD_NAME } from './footer.type';

const config = {
  [SUBSCRIBE_FIELD_NAME.EMAIL]: [required, email],
};

export const subscribeFormValidation = (values) => validate(values, config);
