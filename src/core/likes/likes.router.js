import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated } from 'src/lib/common/auth';

import { ALL_LIKES_ROUTE_PATH } from './likes.constant';
import { HOME_ROUTE_PATH } from '../home';

export function allLikesRouter(ctx) {
  ctx.store.dispatch(setActivePath(ALL_LIKES_ROUTE_PATH));
  authRedirectPrivated(ctx, HOME_ROUTE_PATH);
}
