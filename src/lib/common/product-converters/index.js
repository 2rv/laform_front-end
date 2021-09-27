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

// методы для конвертации определенного item
export const masterClassItemConverter = (item, basket) => ({
  id: item.id,
  name: item.titleRu,
  image: item.images[0]?.fileUrl,
  like: item?.like ? (item.like?.length ? true : false) : null,
  type: item.type || 0,
  bestseller: item.modifier,
  categories: item.categories,
  cart: Boolean(basket?.find((bItem) => bItem?.id === item.id)),
  price: {
    min: checkMinPrice(item?.programs, 'price'),
    discount: item.discount,
    max: checkMaxPrice(item?.programs, 'price'),
  },
});
export const convertPatternItemConverter = (item, basket) => ({
  id: item.id,
  name: item.titleRu,
  image: item.images?.[0]?.fileUrl,
  type: item.type,
  bestseller: item.modifier,
  complexity: item.complexity,
  like: item?.like ? (item.like?.length ? true : false) : null,
  categories: item.categories,
  cart: Boolean(basket?.find((bItem) => bItem?.patternProduct?.id === item.id)),
  price: {
    min: item?.price || checkMinPrice(item?.sizes, 'price'),
    discount: item.discount,
    max: item?.price ? null : checkMaxPrice(item?.sizes, 'price'),
  },
});
export const convertSewingGoodItemConverter = (item, backet) => ({
  id: item.id,
  name: item.titleRu,
  image: item.images?.[0]?.fileUrl,
  type: item.type,
  like: item?.like ? (item.like?.length ? true : false) : null,
  bestseller: item.modifier,
  categories: item.categories,
  cart: Boolean(backet?.find((bItem) => bItem?.sewingProduct?.id === item.id)),
  price: {
    min: checkMinPrice(item?.sizes, 'price'),
    discount: item.discount,
    max: checkMaxPrice(item?.sizes, 'price'),
  },
});
export const convertArticleItemConverter = (item) => ({
  id: item.id,
  name: item.titleRu,
  like: item?.like ? (item.like?.length ? true : false) : null,
  image: item.image?.fileUrl,
  type: item.type,
  like: item?.like ? (item.like?.length ? true : false) : null,
  bestseller: item.modifier,
  categories: item.categories,
  createdDate: item.createdDate,
});

// методы для конвертации категории списков
export const convertMasterClassProducts = (data, basket) => {
  return data.map((item) => masterClassItemConverter(item, basket));
};
export const convertPatternProducts = (data, basket) => {
  return data.map((item) => convertPatternItemConverter(item, basket));
};
export const convertSewingGoodProducts = (data, basket) => {
  return data.map((item) => convertSewingGoodItemConverter(item, basket));
};
export const convertArticleProducts = (data) => {
  return data.map(convertArticleItemConverter);
};

// методы для конвертации лайков, рекомендаций и ещё чего нить
export const convertMultiProducts = (rowData = [], basket) => {
  return rowData.map((item) => {
    const { masterClassId, patternProductId, sewingProductId, postId } = item;
    if (masterClassId) return masterClassItemConverter(masterClassId, basket);
    if (patternProductId)
      return convertPatternItemConverter(patternProductId, basket);
    if (sewingProductId)
      return convertSewingGoodItemConverter(sewingProductId, basket);
    if (postId) return convertArticleItemConverter(postId);
  });
};
