import { authRedirectPrivated } from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { LOGIN_ROUTE_PATH } from '../auth-login';
import { PATTERNS_PAGE_ROUTE_PATH } from './patterns-page.constant';

export function patternsPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(PATTERNS_PAGE_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
