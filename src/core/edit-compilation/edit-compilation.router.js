import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';

import { EDIT_COMPILATION_ROUTE_PATH } from './edit-compilation.constant';

export function editCompilationRouter(ctx) {
  ctx.store.dispatch(setActivePath(EDIT_COMPILATION_ROUTE_PATH));
  // authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
