import { authRedirectPrivated } from 'src/lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';

import {
  AUTH_VERIFICATE_EMAIL_GUEST_REDIRECT,
  AUTH_VERIFICATE_EMAIL_ROUTE_PATH,
} from './auth-verificate-email.constant';

export function authVerificateEmailRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATE_EMAIL_ROUTE_PATH));
  authRedirectPrivated(ctx, AUTH_VERIFICATE_EMAIL_GUEST_REDIRECT);
}
