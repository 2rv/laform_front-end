import { setActivePath } from '../../lib/common/navigation';
import { FAQ_PAGE_ROUTE_PATH } from './faq-page.constant';

export function faqPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(FAQ_PAGE_ROUTE_PATH));
}
