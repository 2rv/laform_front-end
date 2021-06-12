import { validate } from '../../main/validate/validate.core';
import { email, required } from '../../main/validate/validate.service';

import { AUTH_RECOVERY_ACCOUNT_FIELD_NAME } from './auth-recovery-account.type';

const config = {
  [AUTH_RECOVERY_ACCOUNT_FIELD_NAME.EMAIL]: [required, email],
};

export const authRecoveryAccountFormValidation = (values) =>
  validate(values, config);
