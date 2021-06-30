import { setActivePath } from '../../lib/common/navigation';

import { PUBLICATION_ROUTE_PATH } from './publication.constant';

export function publicationRouter(ctx) {
  ctx.store.dispatch(setActivePath(PUBLICATION_ROUTE_PATH));
}
