import { setActivePath } from 'src/lib/common/navigation';
import { ABOUT_ROUTE_PATH } from './about.constant';

export function aboutRouter(ctx) {
  ctx.store.dispatch(setActivePath(ABOUT_ROUTE_PATH));
}
