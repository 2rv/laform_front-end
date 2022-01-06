import { setActivePath } from 'src/lib/common/navigation';
import {
  authRedirectForNonAdminUser,
  authRedirectPrivated,
} from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { MAILING_ROUTE_PATH } from './mailing.constant';

export function mailingRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(MAILING_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
  authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
