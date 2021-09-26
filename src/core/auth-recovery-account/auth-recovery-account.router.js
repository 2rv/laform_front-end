import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from './auth-recovery-account.constant';

export function authRecoveryAccountRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_RECOVERY_ACCOUNT_ROUTE_PATH));
  authRedirectLogged(ctx, HOME_ROUTE_PATH);
}
