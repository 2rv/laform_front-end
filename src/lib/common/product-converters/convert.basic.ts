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
  BasicBasketType,
} from './convert.type';
import { checkInCart, checkMinPrice, convertParams } from './convert.utils';

export const masterClassItemConverter = (
  item: BasicMasterClassType,
  basket: BasicBasketType[],
): CardMasterClassTypeProps => ({
  id: item.id,
  name: item.titleRu || item.titleEn,
  image: item.images[0]?.fileUrl,
  like: item.like && item.like.length > 0,
  type: item.type || 0,
  modifier: item.modifier,
  cart: checkInCart(item.id, basket),
  price: checkMinPrice(item?.programs),
  discount: item.discount,
  programs: convertParams(item?.programs),
});

export const convertPatternItemConverter = (
  item: BasicPatternType,
  basket: BasicBasketType[],
): CardPatternTypeProps => ({
  id: item.id,
  name: item.titleRu || item.titleEn,
  image: item.images?.[0]?.fileUrl,
  type: item.type,
  modifier: item.modifier,
  complexity: item.complexity,
  like: item.like && item.like.length > 0,
  cart: checkInCart(item.id, basket),
  price: checkMinPrice(item?.sizes),
  discount: item.discount,
  sizes: convertParams(item?.sizes),
});

export const convertSewingGoodItemConverter = (
  item: BasicSewingGoodType,
  basket: BasicBasketType[],
): CardSewingGoodTypeProps => ({
  id: item.id,
  type: item.type,
  name: item.titleRu || item.titleEn,
  image: item.images?.[0]?.fileUrl,
  like: item.like && item.like.length > 0,
  modifier: item.modifier,
  cart: checkInCart(item.id, basket),
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
