export const convertUsersOrderData = (data) => {
  return {
    ...data,
    purchaseProducts: data.purchaseProducts.map((product) => {
      const fetchedProduct = (
        product.masterClassId
        || product.patternProductId
        || product.sewingProductId
        || product.postId
      );

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
