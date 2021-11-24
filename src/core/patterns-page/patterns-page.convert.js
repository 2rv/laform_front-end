export const convertPatternData = (data) => {
  return {
    id: data.id,
    type: data.patternProductId?.type,
    images: data.patternProductId?.images.map((image) => image.fileUrl),
    title: data.patternProductId?.titleRu || data.patternProductId?.titleEn,
    categories: data.patternProductId?.categories,
    description:
      data.patternProductId?.descriptionRu ||
      data.patternProductId?.descriptionEn,
    materials:
      data.patternProductId.materialRu || data.patternProductId.materialEn,
    price: Number(data.totalPrice),
    discount: Number(data.totalDiscount),
    diliveryPrice: Number(data?.deliveryPrice || 0),
    count: Number(data.totalCount),
    filesPdf: data.patternProductId?.filesPdf,
    vendorCode: data.optionId?.vendorCode || data.patternProductId?.vendorCode,
    params: {
      size: data.optionId?.size,
      count: data.totalCount,
    },
    otherParams: {
      paymentMethod: data.purchase.paymentMethod,
      diliveryMethod: data.purchase.diliveryMethod,
      diliveryAdress: data.purchase.city,
      status: data.purchase.status,
    },
  };
};
