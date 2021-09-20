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
  const firstPurchaseProduct = (data.purchaseProducts ?? [])[0] ?? {};
  const { productName, fetchedProduct } = getProduct(firstPurchaseProduct);

  return {
    id: data.id,
    params: [
      firstPurchaseProduct?.color && { name: 'ORDERS.TABLE.BODY.COLOR', value: firstPurchaseProduct.color },
      firstPurchaseProduct?.size && { name: 'ORDERS.TABLE.BODY.SIZE', value: firstPurchaseProduct.size },
      firstPurchaseProduct?.type && { name: 'ORDERS.TABLE.BODY.CATEGORY', value: firstPurchaseProduct.type },
      firstPurchaseProduct?.quantity && { name: 'ORDERS.TABLE.BODY.QUANTITY', value: firstPurchaseProduct.quantity },
    ],
    price: data.price,
    status: data.orderStatus,
    productId: fetchedProduct?.id,
    name: fetchedProduct?.titleRu,
    image: (fetchedProduct?.images ? fetchedProduct?.images[0] : fetchedProduct?.imageUrl)?.fileUrl,
    productName,
  };
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
