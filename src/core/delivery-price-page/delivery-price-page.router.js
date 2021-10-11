import { setActivePath } from 'src/lib/common/navigation';
import { DELIVERY_PRICE_PAGE_ROUTE_PATH } from './delivery-price-page.constant';

export function deliveryPricePageRouter(ctx) {
  ctx.store.dispatch(setActivePath(DELIVERY_PRICE_PAGE_ROUTE_PATH));
}
