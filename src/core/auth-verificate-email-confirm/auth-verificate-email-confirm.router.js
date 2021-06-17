import { authRedirectPrivated } from '../../lib/common/auth';
import { codeVerificationRedirect } from '../../lib/common/code-verification';
import { setActivePath } from '../../lib/common/navigation';

import {
  AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH,
  AUTH_VERIFICATE_EMAIL_CONFIRM_REDIRECT_ON_NO_CODE,
  AUTH_VERIFICATE_EMAIL_CONFIRM_GUEST_REDIRECT,
} from './auth-verificate-email-confirm.constant';

export function authVerificateEmailConfirmRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATE_EMAIL_CONFIRM_ROUTE_PATH));
  authRedirectPrivated(ctx, AUTH_VERIFICATE_EMAIL_CONFIRM_GUEST_REDIRECT);
  codeVerificationRedirect(
    ctx,
    AUTH_VERIFICATE_EMAIL_CONFIRM_REDIRECT_ON_NO_CODE,
  );
}
