import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { CREATE_ARTICLE_ROUTE_PATH } from './article-create.constant';

export function createArticleRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_ARTICLE_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
