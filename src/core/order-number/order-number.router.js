import { setActivePath } from '../../lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
  checkQueryIdRedirect,
} from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { ORDER_NUMBER_ROUTE_PATH } from './order-number.constant';

export function orderNumberRouter(ctx) {
  ctx.store.dispatch(setActivePath(ORDER_NUMBER_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  checkQueryIdRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND, 'id');
}
