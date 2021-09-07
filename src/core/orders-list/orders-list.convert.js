export const convertPurchasesData = (data) => {
  return data.purchaseProducts.map((product) => {
    const { productName, fetchedProduct } = getProduct(product);

    return {
      id: data?.id,
      params: [
        product?.color && { name: 'Цвет', value: product.color },
        product?.size && { name: 'Размер', value: product.size },
        product?.type && { name: 'Категория', value: product.type },
        product?.quantity && { name: 'Количество', value: product.quantity },
      ],
      otherParams: [
        data?.fullName && { name: 'ФИО', value: data.fullName },
        data?.city && { name: 'Город', value: data.city },
        { name: 'Адрес доставки', value: "Ул. Ленина 25А" },
        { name: 'Способ оплаты', value: 'Полная предоплата' },
        data?.phoneNumber && { name: 'Контактный телефон', value: data.phoneNumber },
      ],
      price: data?.price,
      status: data?.typeOfDelivery,
      name: fetchedProduct?.titleRu,
      image: (fetchedProduct.images ? fetchedProduct.images[0] : fetchedProduct.imageUrl)?.fileUrl,
      productId: fetchedProduct.id,
      productName,
    };
  });
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
    productName, fetchedProduct
  }
};
