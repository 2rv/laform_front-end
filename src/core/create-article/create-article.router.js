import { setActivePath } from '../../lib/common/navigation';

import { CREATE_ARTICLE_ROUTE_PATH } from './create-article.constant';

export function createArticleRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_ARTICLE_ROUTE_PATH));
}
