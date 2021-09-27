import { checkQueryIdRedirect } from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { setActivePath } from '../../lib/common/navigation';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from './master-class-product.constant';

export function masterClassProductRouter(ctx) {
  ctx.store.dispatch(setActivePath(MASTER_CLASS_PRODUCT_ROUTE_PATH));
  checkQueryIdRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND, 'id');
}
