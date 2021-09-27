import { setActivePath } from '../../lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
  checkQueryIdRedirect,
} from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { ABOUT_ACCOUNT_ROUTE_PATH } from './about-account.constant';

export function aboutAccountRouter(ctx) {
  ctx.store.dispatch(setActivePath(ABOUT_ACCOUNT_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  checkQueryIdRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND, 'id');
}
