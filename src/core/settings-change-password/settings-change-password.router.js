import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';

import {
  SETTINGS_CHANGE_PASSWORD_ROUTE_PATH,
  SETTINGS_CHANGE_PASSWORD_REDIRECT_GUEST,
} from './settings-change-password.constant';

export function settingsChangePasswordRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_CHANGE_PASSWORD_ROUTE_PATH));

  // authRedirectPrivated(ctx, SETTINGS_CHANGE_PASSWORD_REDIRECT_GUEST);
}
