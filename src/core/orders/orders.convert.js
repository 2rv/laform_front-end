import { ORDER_NUMBER_ROUTE_PATH } from '../order-number';
import { PURCHASE_STATUS_INFO } from './orders.constant';

function getPrice(price = 0, discount = 0) {
  return price - price * (discount / 100);
}

export const convertUsersOrderData = (data) => {
  return {
    id: data.id,
    name: data.orderNumber,
    path: ORDER_NUMBER_ROUTE_PATH,
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
