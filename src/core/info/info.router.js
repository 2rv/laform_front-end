import { setActivePath } from '../../lib/common/navigation';

import { INFO_ROUTE_PATH } from './info.constant';

export function infoRouter(ctx) {
  ctx.store.dispatch(setActivePath(INFO_ROUTE_PATH));
}
