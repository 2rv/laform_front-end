export const performMasterClassData = (rowData, backet) => {
  //   console.log(rowData);
  return rowData.map((item) => {
    return {
      id: item.id,
      name: item.titleRu,
      image: item.images[0]?.fileUrl,
      type: item.type || 0,
      bestseller: item.modifier,
      categories: item.categories,
      cart: Boolean(backet?.find((item) => item?.masterClass?.id === item.id)),
      price: {
        min: checkMinPrice(item?.programs, 'price'),
        discount: item.discount,
        max: checkMaxPrice(item?.programs, 'price'),
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
