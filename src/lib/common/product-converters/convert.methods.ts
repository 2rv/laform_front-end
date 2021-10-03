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
} from './convert.type';

export const convertMasterClassProducts = (data: BasicMasterClassType[]) => {
  return data.map((item) => masterClassItemConverter(item));
};
export const convertPatternProducts = (data: BasicPatternType[]) => {
  return data.map((item) => convertPatternItemConverter(item));
};
export const convertSewingGoodProducts = (data: BasicSewingGoodType[]) => {
  return data.map((item) => convertSewingGoodItemConverter(item));
};
export const convertArticleProducts = (data: BasicArticleType[]) => {
  return data.map(convertArticleItemConverter);
};
export const convertMultiProducts = (rowData = []) => {
  return rowData.map((item) => {
    const { masterClassId, patternProductId, sewingProductId, postId } = item;
    if (masterClassId) return masterClassItemConverter(masterClassId);
    if (patternProductId) return convertPatternItemConverter(patternProductId);
    if (sewingProductId) return convertSewingGoodItemConverter(sewingProductId);
    if (postId) return convertArticleItemConverter(postId);
  });
};
