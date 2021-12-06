import { setActivePath } from 'src/lib/common/navigation';
import { DELIVERY_PAYMENT_ROUTE_PATH } from './dilivery-and-payment.constant';

export function deliveryPaymentRouter(ctx) {
  ctx.store.dispatch(setActivePath(DELIVERY_PAYMENT_ROUTE_PATH));
}
