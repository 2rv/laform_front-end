import { codeVerificationRedirect } from '../../lib/common/code-verification';
import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH } from './auth-verificate-email-confirm.constant';

export function authVerificateEmailConfirmRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH));
  codeVerificationRedirect(ctx, HOME_ROUTE_PATH);
}
