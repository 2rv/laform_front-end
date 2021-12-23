import { setActivePath } from 'src/lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { SEWING_GOODS_CREATE_ROUTE_PATH } from './sewing-goods-create.constant';

export function sewingGoodsCreateRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_CREATE_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
