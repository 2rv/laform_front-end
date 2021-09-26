import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from './home.constant';

export function homeRouter(ctx) {
  ctx.store.dispatch(setActivePath(HOME_ROUTE_PATH));
}
