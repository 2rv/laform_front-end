import { BasicPurchaseType, PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { TableItemType } from 'src/lib/common/block-table/table.type';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { ORDER_NUMBER_ROUTE_PATH } from '../order-number';

export const convertOrdersData = (data: BasicPurchaseType): TableItemType => {
  return {
    id: data.id,
    image: '/static/image/orders-image.jpg',
    name: data.orderNumber,
    path: ORDER_NUMBER_ROUTE_PATH,
    pathConfig: { params: { id: data?.id } },
    totalPrice: getPrice({
      discount: data.promoCodeDiscount,
      shippingPrice: data.shippingPrice || 0,
      price: data.price,
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
