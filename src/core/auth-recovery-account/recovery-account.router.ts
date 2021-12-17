import { authRedirectLogged } from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from './recovery-account.constant';

export function authRecoveryAccountRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(AUTH_RECOVERY_ACCOUNT_ROUTE_PATH));
  authRedirectLogged(ctx, HOME_ROUTE_PATH);
}
