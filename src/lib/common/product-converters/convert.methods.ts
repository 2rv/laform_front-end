import {
  convertArticleItemConverter,
  convertPatternItemConverter,
  convertSewingGoodItemConverter,
  masterClassItemConverter,
} from './convert.basic';

import {
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
  BasicArticleType,
  BasicBasketType,
} from './convert.type';

export const convertMasterClassProducts = (
  data: BasicMasterClassType[],
  basket: BasicBasketType[],
) => {
  return data.map((item) => masterClassItemConverter(item, basket));
};
export const convertPatternProducts = (
  data: BasicPatternType[],
  basket: BasicBasketType[],
) => {
  return data.map((item) => convertPatternItemConverter(item, basket));
};
export const convertSewingGoodProducts = (
  data: BasicSewingGoodType[],
  basket: BasicBasketType[],
) => {
  return data.map((item) => convertSewingGoodItemConverter(item, basket));
};
export const convertArticleProducts = (data: BasicArticleType[]) => {
  return data.map(convertArticleItemConverter);
};
export const convertMultiProducts = (
  rowData = [],
  basket: BasicBasketType[],
) => {
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
