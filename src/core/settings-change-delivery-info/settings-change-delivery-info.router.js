import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation';

import {
  SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH,
  SETTINGS_CHANGE_DELIVERY_INFO_REDIRECT_GUEST,
} from './settings-change-delivery-info.constant';

export function settingsChangeDeliveryInfoRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_CHANGE_DELIVERY_INFO_ROUTE_PATH));
  // authRedirectPrivated(ctx, SETTINGS_CHANGE_DELIVERY_INFO_REDIRECT_GUEST);
}
