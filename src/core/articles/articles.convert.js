export const performArticlesData = (rowData) => {
  return rowData.map((item) => {
    return {
      id: item.id,
      name: item.titleRu,
      image: item.image?.fileUrl,
      type: item.type,
      bestseller: item.modifier,
      categories: item.categories,
      createdDate: item.createdDate,
    };
  });
};
