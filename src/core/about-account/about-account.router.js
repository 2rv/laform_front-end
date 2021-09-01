import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated } from '../../lib/common/auth';
import { HOME_ROUTE_PATH } from '../home';
import { ABOUT_ACCOUNT_ROUTE_PATH } from './about-account.constant';

export function aboutAccountRouter(ctx) {
  ctx.store.dispatch(setActivePath(ABOUT_ACCOUNT_ROUTE_PATH));
  authRedirectPrivated(ctx, HOME_ROUTE_PATH);
}
