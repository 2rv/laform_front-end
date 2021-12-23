import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { setActivePath } from 'src/lib/common/navigation';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { SLIDER_EDIT_ROUTE_PATH } from './slider-edit.constant';

export function sliderEditRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(SLIDER_EDIT_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
