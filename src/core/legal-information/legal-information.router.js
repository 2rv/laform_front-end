import { setActivePath } from 'src/lib/common/navigation';
import { LEGAL_INFORMATION_ROUTE_PATH } from './legal-information.constant';

export function legalInformationRouter(ctx) {
  ctx.store.dispatch(setActivePath(LEGAL_INFORMATION_ROUTE_PATH));
}
