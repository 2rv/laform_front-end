import { setActivePath } from 'src/lib/common/navigation';
import {
  authRedirectPrivated,
  authRedirectForNonAdminUser,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { SLIDER_LIST_ROUTE_PATH } from './slider-list.constant';

export function sliderListRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(SLIDER_LIST_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
