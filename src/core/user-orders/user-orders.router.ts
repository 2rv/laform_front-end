import { setActivePath } from 'src/lib/common/navigation';
import { authRedirectPrivated } from 'src/lib/common/auth';
import { USER_ORDERS_ROUTE_PATH } from './user-orders.constant';
import { LOGIN_ROUTE_PATH } from '../auth-login';

export function userOrdersRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(USER_ORDERS_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
