import { setActivePath } from '../../lib/common/navigation';

import { SLIDER_EDIT_ROUTE_PATH } from './slider-edit.constant';

export function sliderEditRouter(ctx) {
  ctx.store.dispatch(setActivePath(SLIDER_EDIT_ROUTE_PATH));
}
