import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';

import {
  AUTH_CHANGE_PASSWORD_ROUTE_PATH,
  AUTH_CHANGE_PASSWORD_REDIRECT_ON_LOGGED,
} from './auth-change-password.constant';

export function authChangePasswordRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_CHANGE_PASSWORD_ROUTE_PATH));
  authRedirectLogged(ctx, AUTH_CHANGE_PASSWORD_REDIRECT_ON_LOGGED);
}
