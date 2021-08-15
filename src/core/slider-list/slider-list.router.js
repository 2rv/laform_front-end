import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { SLIDER_LIST_ROUTE_PATH } from './slider-list.constant';

export function sliderListRouter(ctx) {
  ctx.store.dispatch(setActivePath(SLIDER_LIST_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
