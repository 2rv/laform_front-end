export const convertLikesData = (data) => {
  return data.map((n) => {
    const { fetchedProduct, productName, productCategory } = getProduct(n);

    return {
      id: n.id,
      productId: fetchedProduct.id,
      text: fetchedProduct.titleRu,
      image: (fetchedProduct.images ? fetchedProduct.images[0] : fetchedProduct.imageUrl)?.fileUrl,
      category: productCategory,
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
  let productCategory;

  if (product.masterClassId) {
    productName = 'master-class';
    productCategory = 'PROFILE.CATEGORIES.MASTER_CLASS';
  } else if (product.patternProductId) {
    productName = 'patterns';
    if (product.patternProductId.type === 1) {
      productCategory = 'PROFILE.CATEGORIES.ELECTRONIC_PATTERN';
    } else if (product.patternProductId.type === 2) {
      productCategory = 'PROFILE.CATEGORIES.PRINTED_PATTERN';
    }
  } else if (product.sewingProductId) {
    productName = 'sewing-goods';
    productCategory = 'PROFILE.CATEGORIES.SEWING_GOODS';
  } else if (product.postId) {
    productName = 'article';
    productCategory = 'PROFILE.CATEGORIES.ARTICLE';
  }

  return {
    fetchedProduct, productName, productCategory,
  };
};
