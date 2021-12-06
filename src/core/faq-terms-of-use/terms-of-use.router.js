import { setActivePath } from 'src/lib/common/navigation';
import { TERMS_OF_USE_ROUTE_PATH } from './terms-of-use.constant';

export function termsOfUseRouter(ctx) {
  ctx.store.dispatch(setActivePath(TERMS_OF_USE_ROUTE_PATH));
}
