import { authConfirmedEmail } from 'src/lib/common/auth/auth.redirect';
import { setActivePath } from 'src/lib/common/navigation';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { ARTICLE_PAGE_ROUTE_PATH } from './article-page.constant';
import { checkQueryIdRedirect } from '../../lib/common/auth';

export function articlePageRouter(ctx) {
  ctx.store.dispatch(setActivePath(ARTICLE_PAGE_ROUTE_PATH));
  checkQueryIdRedirect(ctx, HTTP_ERROR_ROUTER.NOT_FOUND, 'id');
}
