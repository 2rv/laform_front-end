import { setActivePath } from '../../lib/common/navigation';
import { ORDERS_LIST_ROUTE_PATH } from './orders-list.constant';

export function ordersListRouter(ctx) {
  ctx.store.dispatch(setActivePath(ORDERS_LIST_ROUTE_PATH));
}
