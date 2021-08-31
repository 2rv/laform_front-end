import { setActivePath } from '../../lib/common/navigation';
import { ABOUT_ACCOUNT_ROUTE_PATH } from './about-account.constant';

export function aboutAccountRouter(ctx) {
  ctx.store.dispatch(setActivePath(ABOUT_ACCOUNT_ROUTE_PATH));
}
