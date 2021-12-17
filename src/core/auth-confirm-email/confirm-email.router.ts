import { setActivePath } from 'src/lib/common/navigation';
import { authRedirectPrivated } from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { AUTH_CONFIRM_EMAIL_ROUTE_PATH } from './confirm-email.constant';

export function confirmEmailRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(AUTH_CONFIRM_EMAIL_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
