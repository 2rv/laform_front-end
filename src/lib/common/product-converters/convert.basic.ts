import {
  CardArticleTypeProps,
  CardSewingGoodTypeProps,
  CardPatternTypeProps,
  CardMasterClassTypeProps,
} from '../../element/card';
import {
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
  BasicArticleType,
} from './convert.type';
import { checkMinPrice, convertParams } from './convert.utils';

export const masterClassItemConverter = (
  item: BasicMasterClassType,
): CardMasterClassTypeProps => ({
  id: item.id,
  name: item.titleRu || item.titleEn,
  image: item.images[0]?.fileUrl,
  like: item.like && item.like.length > 0,
  type: item.type || 0,
  modifier: item.modifier,
  price: checkMinPrice(item?.programs),
  discount: item.discount,
  programs: convertParams(item?.programs),
});

export const convertPatternItemConverter = (
  item: BasicPatternType,
): CardPatternTypeProps => ({
  id: item.id,
  name: item.titleRu || item.titleEn,
  image: item.images?.[0]?.fileUrl,
  type: item.type,
  modifier: item.modifier,
  complexity: item.complexity,
  like: item.like && item.like.length > 0,
  price: checkMinPrice(item?.sizes),
  discount: item.discount,
  sizes: convertParams(item?.sizes),
});

export const convertSewingGoodItemConverter = (
  item: BasicSewingGoodType,
): CardSewingGoodTypeProps => ({
  id: item.id,
  type: item.type,
  name: item.titleRu || item.titleEn,
  image: item.images?.[0]?.fileUrl,
  like: item.like && item.like.length > 0,
  modifier: item.modifier,
  price: checkMinPrice(item.sizes),
  sizes: convertParams(item.sizes),
  colors: convertParams(item.colors),
  discount: item.discount,
});

export const convertArticleItemConverter = (
  item: BasicArticleType,
): CardArticleTypeProps => ({
  id: item.id,
  type: item.type,
  name: item.titleRu || item.titleEn,
  image: item.image?.fileUrl,
  like: item.like && item.like.length > 0,
  modifier: item.modifier,
  createdDate: item.createdDate,
});
