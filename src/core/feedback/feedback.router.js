import { authRedirectPrivated } from 'src/lib/common/auth';
import { HTTP_ERROR_ROUTER } from 'src/main/http';
import { setActivePath } from '../../lib/common/navigation';
import { FEEDBACK_ROUTE_PATH } from './feedback.constant';

export function feedbackRouter(ctx) {
  ctx.store.dispatch(setActivePath(FEEDBACK_ROUTE_PATH));
  authRedirectPrivated(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
