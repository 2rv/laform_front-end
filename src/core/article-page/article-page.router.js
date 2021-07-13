import { setActivePath } from 'src/lib/common/navigation';

import { TEST_ARTICLE_PAGE_DATA } from './article-page.constant';

export function articlePageRouter(ctx) {
  ctx.store.dispatch(setActivePath(TEST_ARTICLE_PAGE_DATA));
}
