import { authRedirectPrivated } from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { LOGIN_ROUTE_PATH } from '../auth-login';
import { SEWING_GOODS_PAGE_ROUTE_PATH } from './sewing-goods-page.constant';

export function sewingGoodsPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_PAGE_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
