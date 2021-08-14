import { setActivePath } from '../../lib/common/navigation';
import { SEWING_GOODS_PAGE_ROUTE_PATH } from './sewing-goods-page.constant';

export function sewingGoodsPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_PAGE_ROUTE_PATH));
}
