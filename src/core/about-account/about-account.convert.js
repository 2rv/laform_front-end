export const convertLikesData = (data) => {
  return data.map((n) => {
    const { productName, fetchedProduct } = getProduct(n);

    return {
      id: n.id,
      name: fetchedProduct.titleRu,
      image: (fetchedProduct.images ? fetchedProduct.images[0] : fetchedProduct.imageUrl)?.fileUrl,
      productName,
    };
  });
};

export const convertPurchasesData = (data) => {
  return data.purchaseProducts.map((product) => {
    const { productName, fetchedProduct } = getProduct(product);
    return {
      id: product?.id,
      name: product?.purchaseProductName,
      params: [
        product?.color && { name: 'Цвет', value: product.color },
        product?.size && { name: 'Размер', value: product.size },
        product?.type && { name: 'Категория', value: product.type },
        product?.quantity && { name: 'Количество', value: product.quantity },
      ],
      price: data?.price,
      status: data?.typeOfDelivery,
      image: (fetchedProduct.images ? fetchedProduct.images[0] : fetchedProduct.imageUrl)?.fileUrl,
      productId: fetchedProduct.id,
      productName,
    };
  });
};

export const convertCommentsData = (data) => {
  return data.map((n) => {
    const { productName, fetchedProduct } = getProduct(n);

    return {
      id: n.id,
      text: n.text,
      createDate: n.createDate,
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
