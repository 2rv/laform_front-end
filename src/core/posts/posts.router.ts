import { setActivePath } from 'src/lib/common/navigation';
import { POSTS_ROUTE_PATH } from './posts.constant';

export function postsRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(POSTS_ROUTE_PATH));
}
