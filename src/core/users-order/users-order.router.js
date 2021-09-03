import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { USERS_ORDER_ROUTE_PATH } from './users-order.constant';

export function usersOrderRouter(ctx) {
  ctx.store.dispatch(setActivePath(USERS_ORDER_ROUTE_PATH));
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
