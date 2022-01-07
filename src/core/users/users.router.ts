import { setActivePath } from 'src/lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { USERS_ROUTE_PATH } from './users.constant';

export function usersRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(USERS_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
