export const convertPatternData = (data) => {
  return {
    id: data.id,
    type: data.patternProductId?.type,
    images: data.patternProductId?.images.map((image) => image.fileUrl),
    title: data.patternProductId?.titleRu,
    categories: data.patternProductId?.categories,
    description: data.patternProductId?.descriptionRu,
    materials: data.patternProductId.materialRu,

    price: Number(data.totalPrice),
    discount: Number(data.totalDiscount),
    diliveryPrice: Number(data?.deliveryPrice || 0),

    filePdf: data.size?.filePdf?.fileUrl,
    vendorCode: data.size?.vendorCode,
    params: {
      size: data.size.size,
    },
    otherParams: {
      paymentMethod: data.purchase.paymentMethod,
      diliveryMethod: data.purchase.diliveryMethod,
      diliveryAdress: data.purchase.city,
      status: data.purchase.status ?? 'Не известно',
    },
  };
};
