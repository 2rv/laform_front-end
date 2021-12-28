import { setActivePath } from 'src/lib/common/navigation';
import { PATTERNS_PRODUCT_ROUTE_PATH } from './patterns-product.constant';

export function patternsProductRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(PATTERNS_PRODUCT_ROUTE_PATH));
}
