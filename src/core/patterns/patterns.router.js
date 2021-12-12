import { setActivePath } from 'src/lib/common/navigation';
import { PATTERNS_ROUTE_PATH } from './patterns.constant';

export function patternsRouter(ctx) {
  ctx.store.dispatch(setActivePath(PATTERNS_ROUTE_PATH));
}
