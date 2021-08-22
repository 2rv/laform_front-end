import { setActivePath } from 'src/lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { PROMOCODES_ROUTE_PATH } from './promocodes.constant';

export function promocodesRouter(ctx) {
  ctx.store.dispatch(setActivePath(PROMOCODES_ROUTE_PATH));
  // authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
