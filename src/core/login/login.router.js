import { authRedirectLogged } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { LOGIN_ROUTE_PATH } from './login.constant';

export function loginRouter(ctx) {
  ctx.store.dispatch(setActivePath(LOGIN_ROUTE_PATH));
  authRedirectLogged(ctx, HOME_ROUTE_PATH);
}
