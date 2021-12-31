import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { setActivePath } from 'src/lib/common/navigation';
import { PRODUCTS_COMPILATION_ROUTE_PATH } from './products-compilation.constant';

export function productsCompilationRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(PRODUCTS_COMPILATION_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
