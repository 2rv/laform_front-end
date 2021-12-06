import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { setActivePath } from '../../lib/common/navigation';
import { PRODUCT_SELECTIONS_ROUTE_PATH } from './product-selections.constant';

export function productSelectionsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(PRODUCT_SELECTIONS_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
