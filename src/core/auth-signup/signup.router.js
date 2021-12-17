import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { SIGNUP_ROUTE_PATH } from './signup.constant';

export function signupRouter(ctx) {
  ctx.store.dispatch(setActivePath(SIGNUP_ROUTE_PATH));
  authRedirectLogged(ctx, HOME_ROUTE_PATH);
}
