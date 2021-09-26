import { setActivePath } from '../../lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { ORDERS_ROUTE_PATH } from './orders.constant';

export function ordersRouter(ctx) {
  ctx.store.dispatch(setActivePath(ORDERS_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
