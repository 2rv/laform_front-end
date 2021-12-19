import { authRedirectPrivated } from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { SETTINGS_ROUTE_PATH } from './settings.constant';
import { LOGIN_ROUTE_PATH } from '../auth-login';

export function settingsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(SETTINGS_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
