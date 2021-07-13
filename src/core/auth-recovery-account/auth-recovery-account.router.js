import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';

import {
  AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
  AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_LOGGED,
} from './auth-recovery-account.constant';

export function authRecoveryAccountRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_RECOVERY_ACCOUNT_ROUTE_PATH));
  // authRedirectLogged(ctx, AUTH_RECOVERY_ACCOUNT_REDIRECT_ON_LOGGED);
}
