import { AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY } from './frames/auth-form-recovery-account/auth-form-recovery-account.type';

export const AUTH_RECOVERY_ACCOUNT_FIELD_NAME = {
  EMAIL: 'email',
};

export const AUTH_RECOVERY_ACCOUNT_FORM_FIELD_NAME = {
  [AUTH_FORM_RECOVERY_ACCOUNT_FIELD_KEY.EMAIL]:
    AUTH_RECOVERY_ACCOUNT_FIELD_NAME.EMAIL,
};

export const AUTH_RECOVERY_ACCOUNT_DATA_NAME = {
  EMAIL: 'email',
};

export const AUTH_RECOVERY_ACCOUNT_ACTION_TYPE = {
  AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_PENDING:
    'AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_PENDING',
  AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_SUCCESS:
    'AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_SUCCESS',
  AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_ERROR:
    'AUTH_RECOVERY_ACCOUNT_ACTION_TYPE.AUTH_RECOVERY_ACCOUNT_FORM_UPLOAD_ERROR',
};