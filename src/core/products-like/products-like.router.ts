import { setActivePath } from 'src/lib/common/navigation';
import { authRedirectPrivated } from 'src/lib/common/auth';
import { LOGIN_ROUTE_PATH } from '../auth-login';
import { PRODUCTS_LIKE_ROUTE_PATH } from './products-like.constant';

export function productsLikeRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(PRODUCTS_LIKE_ROUTE_PATH));
  authRedirectPrivated(ctx, LOGIN_ROUTE_PATH);
}
