export const performArticlesData = (rowData) => {
  //   console.log(rowData);
  return rowData.map((item) => {
    return {
      id: item.id,
      name: item.titleRu,
      image: item.image?.fileUrl,
      type: item.type,
      bestseller: item.modifier,
    };
  });
};
