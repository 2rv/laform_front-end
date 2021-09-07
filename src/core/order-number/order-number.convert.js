export const convertUsersOrderData = (data) => {
  return {
    ...data,
    purchaseProducts: data.purchaseProducts.map((product) => {
      const { productName, fetchedProduct } = getProduct(product);

      return {
        id: fetchedProduct.id,
        name: fetchedProduct.titleRu,
        image: (fetchedProduct.images ? fetchedProduct.images[0] : fetchedProduct.imageUrl)?.fileUrl,
        price: data?.price,
        params: [
          product?.color && { name: 'Цвет', value: product.color },
          product?.size && { name: 'Размер', value: product.size },
          product?.type && { name: 'Категория', value: product.type },
          product?.quantity && { name: 'Количество', value: product.quantity },
        ],
      };
    }),
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
    productName, fetchedProduct
  }
};
