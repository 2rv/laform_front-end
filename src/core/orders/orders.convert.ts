import { BasicPurchaseType } from 'src/lib/basic-types';
import { TableItemData } from 'src/lib/common/block-table';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { ORDER_ROUTE_PATH } from '../order';

export const convertOrdersData = (data: BasicPurchaseType): TableItemData => {
  return {
    id: data.id,
    image: '/static/image/orders-image.jpg',
    name: data.orderNumber,
    path: ORDER_ROUTE_PATH,
    pathConfig: { params: { id: data?.id } },
    totalPrice: getPrice({
      discount: data.promoCodeDiscount,
      shippingPrice: data.shippingPrice || 0,
      price: data.price,
    }),
    status: data.orderStatus,
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
