import { setActivePath } from 'src/lib/common/navigation';
import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from './master-class-product.constant';

export function masterClassProductRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(MASTER_CLASS_PRODUCT_ROUTE_PATH));
}
