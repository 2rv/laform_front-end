import { authRedirectLogged } from 'src/lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH } from './auth-verificate-email-recovery-account.constant';

export function authVerificateEmailRecoveryAccountRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(AUTH_VERIFICATE_EMAIL_RECOVERY_ACCOUNT_ROUTE_PATH),
  );
  authRedirectLogged(ctx, HOME_ROUTE_PATH);
}
