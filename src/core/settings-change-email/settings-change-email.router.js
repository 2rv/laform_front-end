import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import {
  SETTINGS_CHANGE_EMAIL_ROUTE_PATH,
  SETTINGS_CHANGE_EMAIL_REDIRECT_GUEST,
} from './settings-change-email.constant';

export function settingsChangeEmailRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_CHANGE_EMAIL_ROUTE_PATH));

  authRedirectPrivated(ctx, SETTINGS_CHANGE_EMAIL_REDIRECT_GUEST);
}
