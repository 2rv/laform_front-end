import { authConfirmedEmail } from 'src/lib/common/auth/auth.redirect';
import { setActivePath } from 'src/lib/common/navigation';

import { ARTICLE_PAGE_ROUTE_PATH } from './article-page.constant';

export function articlePageRouter(ctx) {
  ctx.store.dispatch(setActivePath(ARTICLE_PAGE_ROUTE_PATH));
  authConfirmedEmail(ctx);
}
