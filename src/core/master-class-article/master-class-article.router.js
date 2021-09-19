import { authConfirmedEmail } from 'src/lib/common/auth/auth.redirect';
import { setActivePath } from 'src/lib/common/navigation';

import { MASTER_CLASS_ARTICLE_ROUTE_PATH } from './master-class-article.constant';

export function masterClassArticleRouter(ctx) {
  ctx.store.dispatch(setActivePath(MASTER_CLASS_ARTICLE_ROUTE_PATH));
}
