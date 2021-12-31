import { setActivePath } from 'src/lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { PRODUCTS_LIST_ROUTE_PATH } from './products-list.constant';
import { HTTP_ERROR_ROUTER } from 'src/main/http';

export function productsListRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(PRODUCTS_LIST_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
