export const convertSewingGoodData = (data) => {
  return {
    id: data.id,
    title: data.sewingProductId?.titleRu,
    description: data.sewingProductId?.descriptionRu,
    images: data.sewingProductId?.images.map((image) => image.fileUrl),
    categories: data.sewingProductId?.categories,
    price: Number(data?.totalPrice),
    discount: Number(data?.totalDiscount),
    count: Number(data.totalCount),
    length: Number(data.totalLength),
    diliveryPrice: Number(data?.deliveryPrice || 0),
    vendorCode: data.optionId?.vendorCode || data.sewingProductId?.vendorCode,
    params: {
      color: data.optionId.color,
      size: data.optionId.size,
      count: data.totalCount,
      length: data.totalLength,
    },
    otherParams: {
      paymentMethod: data.purchase.paymentMethod,
      diliveryMethod: data.purchase.diliveryMethod,
      diliveryAdress: data.purchase.address,
      status: data.purchase.status,
    },
  };
};
