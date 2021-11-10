import { setActivePath } from '../../lib/common/navigation';
import { PRODUCT_SELECTIONS_ROUTE_PATH } from './product-selections.constant';

export function productSelectionsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(PRODUCT_SELECTIONS_ROUTE_PATH));
}
