import { setActivePath } from '../../lib/common/navigation';

import { COMPILATION_ROUTE_PATH } from './compilation.constant';

export function compilationRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPILATION_ROUTE_PATH));
}
