export const convertUsersOrderData = (data) => {
  const firstPurchaseProduct = (data.purchaseProducts ?? [])[0];
  const product = (
    firstPurchaseProduct?.masterClassId
    || firstPurchaseProduct?.patternProductId
    || firstPurchaseProduct?.sewingProductId
    || firstPurchaseProduct?.postId
  );

  return {
    id: data.id,
    params: [
      firstPurchaseProduct?.color && { name: 'Цвет', value: firstPurchaseProduct.color },
      firstPurchaseProduct?.size && { name: 'Размер', value: firstPurchaseProduct.size },
      firstPurchaseProduct?.type && { name: 'Категория', value: firstPurchaseProduct.type },
      firstPurchaseProduct?.quantity && { name: 'Количество', value: firstPurchaseProduct.quantity },
    ],
    otherParams: [
      data.fullName && { name: 'ФИО', value: data.fullName },
      data.city && { name: 'Город', value: data.city },
      { name: 'Адрес доставки', value: "Ул. Ленина 25А" },
      { name: 'Способ оплаты', value: 'Полная предоплата' },
      data.phoneNumber && { name: 'Контактный телефон', value: data.phoneNumber },
    ],
    price: data.price,
    status: data.typeOfDelivery,
    name: data.orderNumber,
    productId: product?.id,
    image: (product?.images ? product?.images[0] : product?.imageUrl)?.fileUrl,
  };
};
