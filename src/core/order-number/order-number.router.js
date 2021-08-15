import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';

import { ORDER_NUMBER_ROUTE_PATH } from './order-number.constant';

export function orderNumberRouter(ctx) {
  ctx.store.dispatch(setActivePath(ORDER_NUMBER_ROUTE_PATH));
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}