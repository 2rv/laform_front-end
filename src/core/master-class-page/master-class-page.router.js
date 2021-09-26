import { checkQueryIdRedirect } from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { MASTER_CLASS_PAGE_ROUTE_PATH } from './master-class-page.constant';

export function masterClassPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(MASTER_CLASS_PAGE_ROUTE_PATH));
  checkQueryIdRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND, 'id');
}
