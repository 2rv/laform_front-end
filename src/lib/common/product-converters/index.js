function checkMinPrice(listData) {
  if (!listData?.[0]?.['price']) return 0;
  return listData.reduce((acc, item) => {
    if (acc > item['price']) acc = item['price'];
    return acc;
  }, listData[0]['price']);
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
  modifier: item.modifier,
  cart: Boolean(basket?.find((bItem) => bItem?.id === item.id)),
  price: checkMinPrice(item?.programs),
  discount: item.discount,
  programs: convertParams(item?.programs),
});
export const convertPatternItemConverter = (item, basket) => ({
  id: item.id,
  name: item.titleRu,
  image: item.images?.[0]?.fileUrl,
  type: item.type,
  modifier: item.modifier,
  complexity: item.complexity,
  like: item?.like ? (item.like?.length ? true : false) : null,
  cart: Boolean(basket?.find((bItem) => bItem?.patternProduct?.id === item.id)),
  price: checkMinPrice(item?.sizes),
  discount: item.discount,
  sizes: convertParams(item?.sizes),
});
export const convertSewingGoodItemConverter = (item, backet) => ({
  id: item.id,
  type: item.type,
  name: item.titleRu,
  image: item.images?.[0]?.fileUrl,
  like: item?.like ? (item.like?.length ? true : false) : null,
  modifier: item.modifier,
  cart: Boolean(backet?.find((bItem) => bItem?.sewingProduct?.id === item.id)),
  price: checkMinPrice(item?.sizes),
  sizes: convertParams(item?.sizes),
  colors: convertParams(item?.colors),
  discount: item.discount,
});
export const convertArticleItemConverter = (item) => ({
  id: item.id,
  type: item.type,
  name: item.titleRu,
  image: item.image?.fileUrl,
  like: item?.like ? (item.like?.length ? true : false) : null,
  modifier: item.modifier,
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

const convertParams = (params) => {
  if (!params || params.length === 0) return null;
  console.log(params);
  return params.map((item) => ({
    id: item.id,
    tid: item?.size || item?.color || item?.programNameRu,
    price: item?.price,
  }));
};
