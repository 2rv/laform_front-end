import { authRedirectLogged } from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { LOGIN_ROUTE_PATH } from './login.constant';

export function loginRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(LOGIN_ROUTE_PATH));
  authRedirectLogged(ctx, HOME_ROUTE_PATH);
}
