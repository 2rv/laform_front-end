import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { USERS_ROUTE_PATH } from './users.constant';

export function usersRouter(ctx) {
  ctx.store.dispatch(setActivePath(USERS_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
