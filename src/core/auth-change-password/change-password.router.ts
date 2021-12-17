import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { authRedirectLogged } from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { codeVerificationRedirect } from 'src/lib/common/code-verification';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from './change-password.constant';

export function authChangePasswordRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(AUTH_CHANGE_PASSWORD_ROUTE_PATH));
  authRedirectLogged(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  codeVerificationRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
