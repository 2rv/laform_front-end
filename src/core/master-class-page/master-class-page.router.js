import { setActivePath } from 'src/lib/common/navigation';
import { MASTER_CLASS_PAGE_ROUTE_PATH } from './master-class-page.constant';

export function masterClassPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(MASTER_CLASS_PAGE_ROUTE_PATH));
}
