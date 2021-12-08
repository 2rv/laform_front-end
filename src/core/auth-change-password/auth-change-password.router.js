import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { codeVerificationRedirect } from '../../lib/common/code-verification';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from './auth-change-password.constant';
import { HTTP_ERROR_ROUTER } from 'src/main/http';

export function authChangePasswordRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_CHANGE_PASSWORD_ROUTE_PATH));
  authRedirectLogged(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  codeVerificationRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
