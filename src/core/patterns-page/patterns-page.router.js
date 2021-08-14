import { setActivePath } from '../../lib/common/navigation';
import { PATTERNS_PAGE_ROUTE_PATH } from './patterns-page.constant';

export function patternsPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(PATTERNS_PAGE_ROUTE_PATH));
}
