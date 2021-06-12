import { AUTH_RECOVERY_ACCOUNT_DATA_NAME } from './auth-recovery-account.type';

export const parseAuthRecoveryAccountData = (raw) => ({
  email: raw[AUTH_RECOVERY_ACCOUNT_DATA_NAME.EMAIL],
});
