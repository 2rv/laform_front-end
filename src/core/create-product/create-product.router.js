import { setActivePath } from '../../lib/common/navigation';

import { CREATE_PRODUCT_ROUTE_PATH } from './create-product.constant';

export function createProductRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_PRODUCT_ROUTE_PATH));
}
