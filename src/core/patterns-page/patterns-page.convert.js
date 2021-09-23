export const convertPatternData = (data) => {
  const fetchedProduct = (
    data.masterClassId
    || data.patternProductId
    || data.sewingProductId
    || data.postId
  );

  return {
    id: data.id,
    title: fetchedProduct?.titleRu,
    shortDescription: fetchedProduct?.categories.map((category) => category.textRu).join(', '),
    fullDescription: fetchedProduct?.descriptionRu,
    images: fetchedProduct?.images.map((image) => image.fileUrl),
    type: fetchedProduct?.type,
    materials: fetchedProduct.materialRu,
    price: Boolean(data.totalDiscount) ? data.totalPrice - data.totalPrice * (data.totalDiscount / 100) : data.totalPrice,
    discount: data.totalDiscount,
    discountPrice: Boolean(data.totalDiscount) ? data.totalPrice * (data.totalDiscount / 100) : 0,
    diliveryPrice: data?.deliveryPrice,
    filePdf: data.size?.filePdf?.fileUrl,
    optionInfo: [
      { name: 'Размер', value: data.size.size },
    ],
  };
};
