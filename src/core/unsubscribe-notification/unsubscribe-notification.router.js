import { setActivePath } from '../../lib/common/navigation';
import { UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH } from './unsubscribe-notification.constant';

export function unsubscribeNotificationRouter(ctx) {
  ctx.store.dispatch(setActivePath(UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH));
}
