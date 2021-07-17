import { setActivePath } from '../../lib/common/navigation';

import { EDIT_COMPILATION_ROUTE_PATH } from './edit-compilation.constant';

export function editCompilationRouter(ctx) {
  ctx.store.dispatch(setActivePath(EDIT_COMPILATION_ROUTE_PATH));
}
