import { setActivePath } from '../../lib/common/navigation';

import { MY_LIKES_ROUTE_PATH } from './my-likes.constant';

export function myLikesRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_LIKES_ROUTE_PATH));
}
