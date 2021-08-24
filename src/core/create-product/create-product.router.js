import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { CREATE_PRODUCT_ROUTE_PATH } from './create-product.constant';

export function createProductRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_PRODUCT_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
