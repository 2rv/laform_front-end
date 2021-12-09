import { BasicPurchaseType, PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { TableItemType } from 'src/lib/common/block-table/table.type';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { USER_ORDER_ROUTE_PATH } from '../user-order';

export const convertUsersOrderData = (
  data: BasicPurchaseType,
): TableItemType => {
  return {
    id: data.id,
    image: '/static/image/orders-image.jpg',
    name: data.orderNumber,
    path: USER_ORDER_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data?.id } },
    totalPrice: getPrice({
      price: data.price,
      discount: data.promoCodeDiscount,
      shippingPrice: data.shippingPrice || 0,
    }),
    status: PURCHASE_STATUS_INFO[data.orderStatus],
    params: {
      count: data.purchaseProductsCount,
      createdDate: data.createdDate,
    },
    otherParams: {
      email: data.email,
      fullName: data.fullName,
      address: data.address,
      phone: data.phone,
      userId: data.userId?.id,
    },
  };
};
