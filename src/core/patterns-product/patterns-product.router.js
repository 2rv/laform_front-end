import { setActivePath } from '../../lib/common/navigation';
import { PATTERNS_PRODUCT_ROUTE_PATH } from './patterns-product.constant';

export function patternsProductRouter(ctx) {
  ctx.store.dispatch(setActivePath(PATTERNS_PRODUCT_ROUTE_PATH));
}
