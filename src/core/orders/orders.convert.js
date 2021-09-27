import { ORDER_NUMBER_ROUTE_PATH } from '../order-number';

export const convertUsersOrderData = (data) => {
  return {
    id: data.id,
    name: data?.orderNumber,
    path: ORDER_NUMBER_ROUTE_PATH,
    pathConfig: { dynamic: true, params: { id: data?.id } },
    totalPrice: Boolean(data?.promoCodeDiscount)
      ? Number(data?.price) * (Number(data?.promoCodeDiscount) / 100)
      : data?.price,
    status: data?.orderStatus ?? 'Неизвестно',
    isOrder: true,
    params: {
      count: data?.purchaseProductsCount,
      createdDate: data?.createdDate,
    },
    otherParams: {
      paymentMethod: data?.paymentMethod,
      deliveryMethod: data?.deliveryMethod,
      email: data?.email,
      fullName: data?.fullName,
      city: data?.city,
      phoneNumber: data?.phoneNumber,
      userId: data?.userId?.id,
    },
  };
};
