import { setActivePath } from 'src/lib/common/navigation';
import { SIZE_ROUTE_PATH } from './size.constant';

export function sizeRouter(ctx) {
  ctx.store.dispatch(setActivePath(SIZE_ROUTE_PATH));
}
