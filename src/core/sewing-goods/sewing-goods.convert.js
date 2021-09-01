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
        min:
          checkMinPrice(item?.sizes, 'price') +
          checkMinPrice(item.colors, 'price'),
        discount: item.discount,
        max:
          checkMaxPrice(item?.sizes, 'price') +
          checkMaxPrice(item.colors, 'price'),
      },
    };
  });
};
function checkMinPrice(listData, nameItem) {
  if (!listData?.[0]?.[nameItem]) return 0;
  return listData.reduce((acc, item) => {
    if (acc > item[nameItem]) acc = item[nameItem];
    return acc;
  }, listData[0][nameItem]);
}
function checkMaxPrice(listData, nameItem) {
  if (listData?.length > 1) {
    if (!listData?.[0]?.[nameItem]) return 0;
    return listData.reduce((acc, item) => {
      if (acc < item[nameItem]) acc = item[nameItem];
      return acc;
    }, listData[0][nameItem]);
  } else {
    return null;
  }
}
