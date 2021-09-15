export const convertLikesData = (rawData) => {
  return rawData.map((data) => {
    const fetchedProduct = (
      data.masterClassId
      || data.patternProductId
      || data.sewingProductId
      || data.postId
    );

    let productName = '';

    if (data.masterClassId) {
      productName = 'master-class';
    } else if (data.patternProductId) {
      productName = 'patterns';
    } else if (data.sewingProductId) {
      productName = 'sewing-goods';
    } else if (data.postId) {
      productName = 'article';
    }

    let type = 0;

    if (productName === 'master-class') {
      type = 0;
    } else if (productName === 'patterns' && data.type === 1) {
      type = 1;
    } else if (productName === 'patterns' && data.type === 2) {
      type = 2;
    } else if (productName === 'sewing-goods') {
      type = 3;
    } else if (productName === 'article') {
      type = 4;
    }

    return {
      id: data.id,
      name: fetchedProduct.titleRu,
      image: (fetchedProduct.images ? fetchedProduct.images[0] : fetchedProduct.imageUrl)?.fileUrl,
      productName,
      type,
      price: {
        min: data?.price ?? 0,
        discont: data?.discount ?? 0,
        max: data?.maxPrice ?? 0,
      },
    };
  });
};
