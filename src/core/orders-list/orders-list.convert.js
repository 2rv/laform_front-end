export const convertPurchasesData = (data) => {
  const firstPurchaseProduct = (data.purchaseProducts ?? [])[0] ?? {};
  const { productName, fetchedProduct } = getProduct(firstPurchaseProduct);

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
    image: (fetchedProduct?.images ? fetchedProduct?.images[0] : fetchedProduct?.imageUrl)?.fileUrl,
    productId: fetchedProduct?.id,
    productName,
  };
};

const getProduct = (product) => {
  const fetchedProduct = (
    product.masterClassId
    || product.patternProductId
    || product.sewingProductId
    || product.postId
  );

  let productName;

  if (product.masterClassId) {
    productName = 'master-class';
  } else if (product.patternProductId) {
    productName = 'patterns';
  } else if (product.sewingProductId) {
    productName = 'sewing-goods';
  } else if (product.postId) {
    productName = 'article';
  }

  return {
    productName, fetchedProduct,
  };
};
