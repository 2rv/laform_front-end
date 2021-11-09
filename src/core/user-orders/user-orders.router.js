import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { USER_ORDERS_ROUTE_PATH } from './user-orders.constant';

export function userOrdersRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ORDERS_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
