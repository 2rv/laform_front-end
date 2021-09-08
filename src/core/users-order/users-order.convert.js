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
      data.city && { name: 'Город и точный адрес доставки', value: data.city },
      data.typeOfPayment && { name: 'Способ оплаты', value: data.typeOfPayment },
      data.phoneNumber && { name: 'Контактный телефон', value: data.phoneNumber },
    ],
    price: data.price,
    status: data.orderStatus,
    name: data.orderNumber,
    productId: product?.id,
    image: (product?.images ? product?.images[0] : product?.imageUrl)?.fileUrl,
  };
};
