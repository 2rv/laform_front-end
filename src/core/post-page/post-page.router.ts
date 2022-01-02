import { setActivePath } from 'src/lib/common/navigation';
import { POST_PAGE_ROUTE_PATH } from './post-page.constant';

export function postPageRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(POST_PAGE_ROUTE_PATH));
}
