import { setActivePath } from 'src/lib/common/navigation';
import { MASTER_CLASSES_ROUTE_PATH } from './master-classes.constant';

export function masterClassesRouter(ctx: any) {
  ctx.store.dispatch(setActivePath(MASTER_CLASSES_ROUTE_PATH));
}
