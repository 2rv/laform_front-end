import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { codeVerificationRedirect } from '../../lib/common/code-verification';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from './auth-change-password.constant';
import { HOME_ROUTE_PATH } from '../home';

export function authChangePasswordRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_CHANGE_PASSWORD_ROUTE_PATH));
  authRedirectLogged(ctx, HOME_ROUTE_PATH);
  codeVerificationRedirect(ctx, HOME_ROUTE_PATH);
}
