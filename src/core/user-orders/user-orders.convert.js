import { PURCHASE_STATUS_INFO } from 'src/lib/basic-types';
import { getPrice } from 'src/lib/common/product-converters/convert.utils';
import { USER_ORDER_ROUTE_PATH } from '../user-order';

export const convertUsersOrderData = (data) => {
  return {
    id: data.id,
    image: '/static/image/orders-image.jpg',
    name: data.orderNumber,
    path: USER_ORDER_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data?.id } },
    totalPrice: getPrice({
      price: data.price,
      discount: data.promoCodeDiscount,
      shippingPrice: data.shippingPrice,
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
