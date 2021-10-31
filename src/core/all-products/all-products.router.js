import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser, authRedirectPrivated } from 'src/lib/common/auth';
import { ALL_PRODUCTS_ROUTE_PATH } from './all-products.constant';
import { HTTP_ERROR_ROUTER } from '../../main/http';

export function allProductsRouter(ctx) {
  ctx.store.dispatch(setActivePath(ALL_PRODUCTS_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
