import { setActivePath } from '../../lib/common/navigation';

import { SEWING_GOODS_ROUTE_PATH } from './sewing-goods.constant';

export function sewingGoodsRouter(ctx) {
  ctx.store.dispatch(setActivePath(SEWING_GOODS_ROUTE_PATH));
}
