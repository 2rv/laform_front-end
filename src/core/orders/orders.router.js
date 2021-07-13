import { setActivePath } from '../../lib/common/navigation';

import { ORDERS_ROUTE_PATH } from './orders.constant';

export function ordersRouter(ctx) {
  ctx.store.dispatch(setActivePath(ORDERS_ROUTE_PATH));
}
