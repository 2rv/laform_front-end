import { setActivePath } from 'src/lib/common/navigation';
import { RECENT_COMMENTS_ROUTE_PATH } from './recent-comments.constant';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';

export function recentCommentsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(RECENT_COMMENTS_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
