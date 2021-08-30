import { setActivePath } from '../../lib/common/navigation';
import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH } from './auth-verificate-email-recovery-account.constant';

export function authVerificateEmailRecoveryAccountRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH),
  );
}
