import { setActivePath } from 'src/lib/common/navigation';
import { authRedirectPrivated } from 'src/lib/common/auth';
import { ALL_LIKES_ROUTE_PATH } from './likes.constant';
import { LOGIN_ROUTE_PATH } from '../auth-login';

export function allLikesRouter(ctx) {
  ctx.store.dispatch(setActivePath(ALL_LIKES_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
