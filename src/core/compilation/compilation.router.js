import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { COMPILATION_ROUTE_PATH } from './compilation.constant';
import { authConfirmedEmail } from 'src/lib/common/auth/auth.redirect';

export function compilationRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPILATION_ROUTE_PATH));
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authConfirmedEmail(ctx);
}
