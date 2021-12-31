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
  BasicProductLinkType,
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

export const convertMultiProducts = (data: BasicProductLinkType[] = []) => {
  if (!data) return [];
  return data.reduce<CardMultiType[]>((acc, item) => {
    const { masterClassId, patternProductId, sewingProductId, postId } = item;
    if (masterClassId) {
      acc.push(masterClassItemConverter(masterClassId));
    }
    if (patternProductId) {
      acc.push(convertPatternItemConverter(patternProductId));
    }
    if (sewingProductId) {
      acc.push(convertSewingGoodItemConverter(sewingProductId));
    }
    if (postId) {
      acc.push(convertArticleItemConverter(postId));
    }
    return acc;
  }, []);
};
