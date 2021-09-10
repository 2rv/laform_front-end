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
      firstPurchaseProduct?.format && { name: 'Формат', value: firstPurchaseProduct.format },
      firstPurchaseProduct?.program && { name: 'Программа', value: firstPurchaseProduct.program },
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
    productId: fetchedProduct?.id,
    image: (fetchedProduct?.images ? fetchedProduct?.images[0] : fetchedProduct?.imageUrl)?.fileUrl,
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
