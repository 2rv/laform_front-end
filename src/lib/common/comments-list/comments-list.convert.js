export const convertCommentsData = (data) => {
  return data?.map((n) => {
    const { fetchedProduct, productName } = getProduct(n);

    return {
      id: n.id,
      text: n.text,
      createDate: n.createDate,
      productId: fetchedProduct.id,
      image: (fetchedProduct?.images ? fetchedProduct?.images[0] : fetchedProduct?.image)?.fileUrl,
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
    fetchedProduct, productName,
  };
};
