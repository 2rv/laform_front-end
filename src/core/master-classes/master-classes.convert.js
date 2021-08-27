export const performMasterClassData = (rowData) => {
  console.log(rowData);
  return rowData.map((item) => {
    return {
      id: item.id,
      name: item.titleRu,
      image: item.imageUrls?.[0]?.fileUrl,
      type: item.type.id,
      bestseller: item.modifier,
      price: {
        min: 500,
        discount: item.discount,
      },
    };
  });
};
