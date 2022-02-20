import { BasicPurchaseType } from 'src/lib/basic-types';
import { TableItemData } from 'src/lib/common/block-table';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { USER_ORDER_ROUTE_PATH } from '../user-order';

export const convertUsersOrderData = (
  data: BasicPurchaseType,
): TableItemData => {
  return {
    id: data.id,
    image: '/static/image/orders-image.jpg',
    name: data.orderNumber,
    path: USER_ORDER_ROUTE_PATH,
    pathConfig: { params: { id: data?.id } },
    totalPrice: getPrice({
      price: data.price,
      discount: data.promoCodeDiscount,
      shippingPrice: data.shippingPrice || 0,
    }),
    status: data.orderStatus,
    params: {
      count: data.purchaseProductsCount,
      createdDate: data.createdDate,
      deliveryType: data.deliveryType,
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
