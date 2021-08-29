export const performSewingGoodsData = (rowData) => {
  console.log(rowData);
  return rowData.map((item) => {
    return {
      id: item.id,
      name: item.titleRu,
      image: item.images?.[0]?.fileUrl,
      type: item.type.id,
      bestseller: item.modifier,
      price: {
        min: 0,
        discount: item.discount,
      },
    };
  });
};
