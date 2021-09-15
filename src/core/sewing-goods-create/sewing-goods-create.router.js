import { setActivePath } from '../../lib/common/navigation';
import { authRedirectForNonAdminUser } from '../../lib/common/auth';
import { HTTP_ERROR_ROUTER } from '../../main/http';
import { CREATE_SEWING_GOODS_ROUTE_PATH } from './sewing-goods-create.constant';

export function createSewingGoodsRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_SEWING_GOODS_ROUTE_PATH));
  //   authRedirectForNonAdminUser(ctx, HTTP_ERROR_ROUTER.NOT_FOUND);
}
