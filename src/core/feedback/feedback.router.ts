import { setActivePath } from 'src/lib/common/navigation';
import { FEEDBACK_ROUTE_PATH } from './feedback.constant';

export function feedbackRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(FEEDBACK_ROUTE_PATH));
}
