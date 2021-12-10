import { codeVerificationRedirect } from 'src/lib/common/code-verification';
import { setActivePath } from 'src/lib/common/navigation';
import { AUTH_CHANGE_EMAIL_ROUTE_PATH } from './auth-change-email.constant';
import { HOME_ROUTE_PATH } from '../home';

export function authChangeEmailRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_CHANGE_EMAIL_ROUTE_PATH));
  codeVerificationRedirect(ctx, HOME_ROUTE_PATH);
}
