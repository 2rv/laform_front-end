import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { CREATE_MASTER_CLASS_ROUTE_PATH } from './master-class-create.constant';

export function createMasterClassRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_MASTER_CLASS_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
