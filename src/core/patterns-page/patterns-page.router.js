import { authRedirectPrivated } from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { setActivePath } from '../../lib/common/navigation';
import { PATTERNS_PAGE_ROUTE_PATH } from './patterns-page.constant';

export function patternsPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(PATTERNS_PAGE_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
