import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { SETTINGS_ROUTE_PATH } from './settings.constant';
import { HOME_ROUTE_PATH } from '../home';

export function settingsRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_ROUTE_PATH));
  authRedirectPrivated(ctx, HOME_ROUTE_PATH);
}
