import { checkQueryIdRedirect } from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { setActivePath } from '../../lib/common/navigation';
import { PATTERNS_PRODUCT_ROUTE_PATH } from './patterns-product.constant';

export function patternsProductRouter(ctx) {
  ctx.store.dispatch(setActivePath(PATTERNS_PRODUCT_ROUTE_PATH));
  checkQueryIdRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND, 'id');
}
