import { authConfirmedEmail } from 'src/lib/common/auth/auth.redirect';
import { setActivePath } from '../../lib/common/navigation';

import { BASKET_ROUTE_PATH } from './basket.constant';

export function basketRouter(ctx) {
  ctx.store.dispatch(setActivePath(BASKET_ROUTE_PATH));
  //   authConfirmedEmail(ctx);
}
