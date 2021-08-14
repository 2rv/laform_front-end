import { setActivePath } from '../../lib/common/navigation';

import { MY_MASTER_CLASSES_ROUTE_PATH } from './my-master-classes.constant';

export function myMasterClassesRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_MASTER_CLASSES_ROUTE_PATH));
}
