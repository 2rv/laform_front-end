export const performPatternsData = (rowData) => {
  console.log(rowData);
  return rowData.map((item) => {
    return {
      id: item.id,
      name: item.titleRu,
      image: item.images?.[0]?.fileUrl,
      type: item.type.id,
      bestseller: item.modifier,
      complexity: item.complexity,
      price: {
        min: item?.price || 0,
        discount: item.discount,
      },
    };
  });
};
