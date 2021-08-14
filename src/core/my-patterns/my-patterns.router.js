import { setActivePath } from '../../lib/common/navigation';

import { MY_PATTERNS_ROUTE_PATH } from './my-patterns.constant';

export function myPatternsRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_PATTERNS_ROUTE_PATH));
}
