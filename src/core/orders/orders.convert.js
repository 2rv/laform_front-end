import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { ORDER_NUMBER_ROUTE_PATH } from '../order-number';

export const convertUsersOrderData = (data) => {
  return {
    id: data.id,
    image: '/static/image/orders-image.jpg',
    name: data.orderNumber,
    path: ORDER_NUMBER_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data?.id } },
    totalPrice: getPrice({
      discount: data.promoCodeDiscount,
      shippingPrice: data.shippingPrice,
      price: data.price,
    }),
    status: PURCHASE_STATUS_INFO[data.orderStatus],
    params: {
      count: data.purchaseProductsCount,
      createdDate: data.createdDate,
      deliveryMethod: data.typeOfDelivery,
      paymentMethod: data.paymentMethod,
    },
    otherParams: {
      email: data.email,
      fullName: data.fullName,
      city: data.city,
      phoneNumber: data.phoneNumber,
      userId: data.userId?.id,
    },
  };
};
