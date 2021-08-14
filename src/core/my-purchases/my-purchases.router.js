import { setActivePath } from '../../lib/common/navigation';

import { MY_PURCHASES_ROUTE_PATH } from './my-purchases.constant';

export function myPurchasesRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_PURCHASES_ROUTE_PATH));
}
