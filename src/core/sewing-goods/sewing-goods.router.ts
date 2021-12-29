import { setActivePath } from 'src/lib/common/navigation';
import { SEWING_GOODS_ROUTE_PATH } from './sewing-goods.constant';

export function sewingGoodsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_ROUTE_PATH));
}
