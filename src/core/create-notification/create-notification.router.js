import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { CREATE_NOTIFICATION_ROUTE_PATH } from './create-notification.constant';

export function createNotificationRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_NOTIFICATION_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}