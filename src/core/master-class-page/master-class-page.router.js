import { setActivePath } from 'src/lib/common/navigation';

import { TEST_MASTER_CLASS_PAGE_DATA } from './master-class-page.constant';

export function masterClassPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(TEST_MASTER_CLASS_PAGE_DATA));
}
