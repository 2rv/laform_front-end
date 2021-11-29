import { setActivePath } from '../../lib/common/navigation';
import { BASKET_ROUTE_PATH } from './basket.constant';

export function basketRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(BASKET_ROUTE_PATH));
}
