export const convertSewingGoodData = (data) => {
  const fetchedProduct = (
    data.masterClassId
    || data.patternProductId
    || data.sewingProductId
    || data.postId
  );

  return {
    id: data.id,
    title: fetchedProduct?.titleRu,
    fullDescription: fetchedProduct?.descriptionRu,
    images: fetchedProduct?.images.map((image) => image.fileUrl),
    shortDescription: fetchedProduct?.categories.map((category) => category.textRu).join(', '),
    price: Boolean(data.totalDiscount) ? data.totalPrice - data.totalPrice * (data.totalDiscount / 100) : data.totalPrice,
    discount: data.totalDiscount,
    discountPrice: Boolean(data.totalDiscount) ? data.totalPrice * (data.totalDiscount / 100) : 0,
    diliveryPrice: data?.deliveryPrice,
    address: data.purchase.city,
    paymentMethod: data.purchase.paymentMethod,
    status: data.purchase.status,
    optionInfo: [
      { name: 'BLOCK_TABLE_LIST.PARAMS.COLOR', value: data.color.color },
      { name: 'BLOCK_TABLE_LIST.PARAMS.SIZE', value: data.size.size },
      { name: 'BLOCK_TABLE_LIST.PARAMS.QUANTITY', value: data.totalCount },
    ],
  };
};
