import { setActivePath } from '../../lib/common/navigation';

import { SLIDER_EDIT_LIST_ROUTE_PATH } from './slider-edit-list.constant';

export function sliderEditListRouter(ctx) {
  ctx.store.dispatch(setActivePath(SLIDER_EDIT_LIST_ROUTE_PATH));
}
