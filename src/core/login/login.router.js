// import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';

import {
  // LOGIN_REDIRECT_ON_LOGGED,
  LOGIN_ROUTE_PATH,
} from './login.constant';

export function loginRouter(ctx) {
  ctx.store.dispatch(setActivePath(LOGIN_ROUTE_PATH));
  // authRedirectLogged(ctx, LOGIN_REDIRECT_ON_LOGGED);
}
