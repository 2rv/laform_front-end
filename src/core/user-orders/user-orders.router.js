import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated } from '../../lib/common/auth';
import { USER_ORDERS_ROUTE_PATH } from './user-orders.constant';
import { LOGIN_ROUTE_PATH } from '../login';

export function userOrdersRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ORDERS_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
