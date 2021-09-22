import { ORDER_NUMBER_ROUTE_PATH } from '../order-number';

export const convertUsersOrderData = (data) => {
  return {
    id: data.id,
    name: data?.orderNumber,
    path: `${ORDER_NUMBER_ROUTE_PATH}/${data?.orderNumber}`,
    totalPrice: Boolean(data?.promoCodeDiscount) ? Number(data?.price) * (Number(data?.promoCodeDiscount) / 100) : data?.price,
    status: data?.orderStatus ?? 'Состояние',
    image: (data?.images ? data?.images[0] : data?.imageUrl)?.fileUrl ?? 'https://lh3.googleusercontent.com/proxy/wXY6W50wZlaUZne7tvv7ro0mlyD8vbuJJe38yjYFz8B7V350YO5sn0wXWqBqyrylGlVy66y_3XByEtdirf6mlZGFpSDPhoW6EYh2EfXH3YtOYmqr6Mii4nLmSlYJGtD6CSa8aS0Cmyt1T7ak',
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
