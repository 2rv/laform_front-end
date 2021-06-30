import { setActivePath } from 'src/lib/common/navigation';
import { MASTER_CLASSES_ROUTE_PATH } from './master-classes.constant';

export function masterClassesRouter(ctx) {
  ctx.store.dispatch(setActivePath(MASTER_CLASSES_ROUTE_PATH));
}
