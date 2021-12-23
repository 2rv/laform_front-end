import { setActivePath } from 'src/lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { PATTERN_CREATE_ROUTE_PATH } from './pattern-create.constant';

export function patternCreateRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(PATTERN_CREATE_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
