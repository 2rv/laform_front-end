import { setActivePath } from '../../lib/common/navigation';
import { ARTICLES_ROUTE_PATH } from './articles.constant';

export function articlesRouter(ctx) {
  ctx.store.dispatch(setActivePath(ARTICLES_ROUTE_PATH));
}
