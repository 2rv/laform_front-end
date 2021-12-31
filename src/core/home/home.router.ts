import { setActivePath } from 'src/lib/common/navigation';
import { HOME_ROUTE_PATH } from './home.constant';

export function homeRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(HOME_ROUTE_PATH));
}
