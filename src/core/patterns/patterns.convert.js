export const performPatternsData = (rowData, backet) => {
  //   console.log(rowData);
  return rowData.map((item) => {
    return {
      id: item.id,
      name: item.titleRu,
      image: item.images?.[0]?.fileUrl,
      type: item.type,
      bestseller: item.modifier,
      complexity: item.complexity,
      cart: Boolean(
        backet.find((bItem) => bItem?.patternProduct?.id === item.id),
      ),
      price: {
        min: item?.price || checkMinPrice(item?.sizes, 'price'),
        discount: item.discount,
        max: item?.price ? null : checkMaxPrice(item?.sizes, 'price'),
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
