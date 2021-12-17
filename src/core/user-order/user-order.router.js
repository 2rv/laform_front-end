import { setActivePath } from 'src/lib/common/navigation';
import { authRedirectPrivated } from 'src/lib/common/auth';
import { USER_ORDER_ROUTE_PATH } from './user-order.constant';
import { LOGIN_ROUTE_PATH } from '../auth-login';

export function userOrderRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ORDER_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
