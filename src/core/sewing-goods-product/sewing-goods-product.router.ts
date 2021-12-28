import { setActivePath } from 'src/lib/common/navigation';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from './sewing-goods-product.constant';

export function sewingGoodsProductRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_PRODUCT_ROUTE_PATH));
}
