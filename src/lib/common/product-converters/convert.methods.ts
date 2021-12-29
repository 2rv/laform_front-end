import {
  convertArticleItemConverter,
  convertPatternItemConverter,
  convertSewingGoodItemConverter,
  masterClassItemConverter,
} from './convert.basic';

import {
  BasicPostType,
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
  BasicRecommendationProducsType,
} from 'src/lib/basic-types';

import {
  CardArticleType,
  CardSewingGoodType,
  CardPatternType,
  CardMasterClassType,
  CardMultiType,
} from '../../element/card';

export const convertMasterClassProducts = (
  data: BasicMasterClassType[],
): CardMasterClassType[] => {
  return data.map((item) => masterClassItemConverter(item));
};
export const convertPatternProducts = (
  data: BasicPatternType[],
): CardPatternType[] => {
  return data.map((item) => convertPatternItemConverter(item));
};
export const convertSewingGoodProducts = (
  data: BasicSewingGoodType[],
): CardSewingGoodType[] => {
  return data.map((item) => convertSewingGoodItemConverter(item));
};
export const convertArticleProducts = (
  data: BasicPostType[],
): CardArticleType[] => {
  return data.map(convertArticleItemConverter);
};

export const convertMultiProducts = (
  rowData: BasicRecommendationProducsType[] = [],
): CardMultiType[] => {
  if (!rowData) return [];
  return rowData.map((item) => {
    const { masterClassId, patternProductId, sewingProductId, postId } = item;
    if (masterClassId) return masterClassItemConverter(masterClassId);
    if (patternProductId) return convertPatternItemConverter(patternProductId);
    if (sewingProductId) return convertSewingGoodItemConverter(sewingProductId);
    if (postId) return convertArticleItemConverter(postId);
    return undefined;
  });
};
