import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { CREATE_PRINT_PATTERN_ROUTE_PATH } from './patterns-create-print.constant';

export function createPrintPatternRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_PRINT_PATTERN_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
