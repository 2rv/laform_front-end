export const convertSewingGoodData = (data) => {
  return {
    id: data.id,
    title: data.sewingProductId?.titleRu,
    description: data.sewingProductId?.descriptionRu,
    images: data.sewingProductId?.images.map((image) => image.fileUrl),
    categories: data.sewingProductId?.categories,
    price: Number(data?.totalPrice),
    discount: Number(data?.totalDiscount),
    count: data.totalCount,
    diliveryPrice: Number(data?.deliveryPrice || 0),
    vendorCode: data.size?.vendorCode,

    params: {
      color: data.color.color,
      size: data.size.size,
      count: data.totalCount,
    },
    otherParams: {
      paymentMethod: data.purchase.paymentMethod,
      diliveryMethod: data.purchase.diliveryMethod,
      diliveryAdress: data.purchase.city,
      status: data.purchase.status ?? 'Не известно',
    },
  };
};
