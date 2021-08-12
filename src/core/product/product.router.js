import { setActivePath } from 'src/lib/common/navigation';

import { PRODUCT_ROUTE_PATH } from './product.constant';

export function productRouter(ctx) {
  ctx.store.dispatch(setActivePath(PRODUCT_ROUTE_PATH));
}
