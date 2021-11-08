import { setActivePath } from 'src/lib/common/navigation';
import { PRIVACY_POLICY_ROUTE_PATH } from './privacy-policy.constant';

export function privacyPolicyRouter(ctx) {
  ctx.store.dispatch(setActivePath(PRIVACY_POLICY_ROUTE_PATH));
}
