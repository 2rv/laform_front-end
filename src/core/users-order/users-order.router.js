import { setActivePath } from '../../lib/common/navigation';
import { USERS_ORDER_ROUTE_PATH } from './users-order.constant';

export function usersOrderRouter(ctx) {
  ctx.store.dispatch(setActivePath(USERS_ORDER_ROUTE_PATH));
}
