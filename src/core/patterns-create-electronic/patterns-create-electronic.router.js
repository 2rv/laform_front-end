import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { ELECTRONIC_PATTERN_ROUTE_PATH } from './patterns-create-electronic.constant';

export function createElectronicPatternRouter(ctx) {
  ctx.store.dispatch(setActivePath(ELECTRONIC_PATTERN_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
