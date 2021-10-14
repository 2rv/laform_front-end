import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated } from 'src/lib/common/auth';
import { UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH } from './unsubscribe-notification.constant';
import { HOME_ROUTE_PATH } from '../home';

export function unsubscribeNotificationRouter(ctx) {
  ctx.store.dispatch(setActivePath(UNSUBSCRIBE_NOTIFICATION_ROUTE_PATH));
  authRedirectPrivated(ctx, HOME_ROUTE_PATH);
}
