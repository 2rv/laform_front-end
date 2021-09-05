export const convertLikesData = (data) => {
  return data.map((n) => {
    const fetchedProduct = (
      n.masterClassId
      || n.patternProductId
      || n.sewingProductId
      || n.postId
    );

    let productName;

    if (n.masterClassId) {
      productName = 'master-class';
    } else if (n.patternProductId) {
      productName = 'patterns';
    } else if (n.sewingProductId) {
      productName = 'sewing-goods';
    } else if (n.postId) {
      productName = 'article';
    }

    return {
      id: n.id,
      name: fetchedProduct.titleRu,
      image: (fetchedProduct.images ? fetchedProduct.images[0] :fetchedProduct.imageUrl)?.fileUrl,
      productName,
    };
  });
};

export const convertCommentsData = (data) => ({
  id: data.id,
  name: data?.postName ?? null,
  image: data?.imageUrl?.fileUrl ?? null,
  comment: data?.text,
});
