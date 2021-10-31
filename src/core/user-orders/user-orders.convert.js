import { USER_ORDER_ROUTE_PATH } from '../user-order';
import { PURCHASE_STATUS_INFO } from './user-orders.constant';

function getPrice(price = 0, discount = 0) {
  return price - price * (discount / 100);
}

export const convertUsersOrderData = (data) => {
  return {
    id: data.id,
    name: data.orderNumber,
    path: USER_ORDER_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data?.id } },
    totalPrice: getPrice(data.price, data.promoCodeDiscount),
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
