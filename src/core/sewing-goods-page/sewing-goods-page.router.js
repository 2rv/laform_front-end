import { authRedirectPrivated } from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { setActivePath } from '../../lib/common/navigation';
import { SEWING_GOODS_PAGE_ROUTE_PATH } from './sewing-goods-page.constant';

export function sewingGoodsPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_PAGE_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  checkQueryIdRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND, 'id');
}
