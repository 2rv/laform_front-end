import { setActivePath } from '../../lib/common/navigation';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from './sewing-goods-product.constant';

export function sewingGoodsProductRouter(ctx) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_PRODUCT_ROUTE_PATH));
}