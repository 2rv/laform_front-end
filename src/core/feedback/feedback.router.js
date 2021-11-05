import { setActivePath } from '../../lib/common/navigation';
import { FEEDBACK_ROUTE_PATH } from './feedback.constant';

export function feedbackRouter(ctx) {
  ctx.store.dispatch(setActivePath(FEEDBACK_ROUTE_PATH));
}
