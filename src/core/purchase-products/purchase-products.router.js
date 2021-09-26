import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';
import { HOME_ROUTE_PATH } from '../home';
import { PURCHASE_PRODUCTS_ROUTE_PATH } from './purchase-products.constant';

export function purchaseProductsRouter(ctx) {
  ctx.store.dispatch(setActivePath(PURCHASE_PRODUCTS_ROUTE_PATH));
  authRedirectPrivated(ctx, HOME_ROUTE_PATH);
}
