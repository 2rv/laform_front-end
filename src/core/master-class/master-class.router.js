import { setActivePath } from 'src/lib/common/navigation';

import { MASTER_CLASS_ROUTE_PATH } from './master-class.constant';

export function masterClassRouter(ctx) {
  ctx.store.dispatch(setActivePath(MASTER_CLASS_ROUTE_PATH));
}
