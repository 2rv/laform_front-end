import { setActivePath } from 'src/lib/common/navigation';
import { FAQ_ROUTE_PATH } from './faq.constant';

export function faqRouter(ctx) {
  ctx.store.dispatch(setActivePath(FAQ_ROUTE_PATH));
}
