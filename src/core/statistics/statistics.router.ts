import { setActivePath } from 'src/lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { STATISTICS_ROUTE_PATH } from './statistics.constant';

export function statisticsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(STATISTICS_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
