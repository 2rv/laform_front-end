import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { SETTINGS_ROUTE_PATH } from './settings.constant';
import { LOGIN_ROUTE_PATH } from '../login';

export function settingsRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
