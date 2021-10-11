import {
  CardArticleType,
  CardSewingGoodType,
  CardPatternType,
  CardMasterClassType,
} from '../../element/card';
import {
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
  BasicArticleType,
} from './convert.type';
import { convertOptions, checkMinPriceAndDiscount } from './convert.utils';

export function masterClassItemConverter(
  item: BasicMasterClassType,
): CardMasterClassType {
  return {
    id: item.id,
    name: item.titleRu || item.titleEn,
    image: item.images[0]?.fileUrl,
    like: item.like && item.like.length > 0,
    type: item.type || 0,
    modifier: item.modifierRu || item.modifierEn,
    price: item.price,
    discount: item.discount,
    vendorCode: item.vendorCode,
  };
}

export function convertArticleItemConverter(
  item: BasicArticleType,
): CardArticleType {
  return {
    id: item.id,
    type: item.type,
    name: item.titleRu || item.titleEn,
    image: item.image?.fileUrl,
    like: item.like && item.like.length > 0,
    modifier: item.modifierRu || item.modifierEn,
    createdDate: item.createdDate,
  };
}

export function convertPatternItemConverter(
  item: BasicPatternType,
): CardPatternType {
  const { price, discount } = checkMinPriceAndDiscount(
    item.options,
    // item.price,
    // item.discount,
  );
  return {
    id: item.id,
    name: item.titleRu || item.titleEn,
    image: item.images?.[0]?.fileUrl,
    type: item.type,
    modifier: item.modifierRu || item.modifierEn,
    complexity: item.complexity,
    like: item.like && item.like.length > 0,
    price: price,
    discount: discount,
    options: convertOptions(item?.options),
  };
}

export function convertSewingGoodItemConverter(
  item: BasicSewingGoodType,
): CardSewingGoodType {
  const { price, discount } = checkMinPriceAndDiscount(
    item.options,
    item.price,
    item.discount,
  );
  console.log(item.options);
  return {
    id: item.id,
    type: item.type,
    name: item.titleRu || item.titleEn,
    image: item.images?.[0]?.fileUrl,
    like: item.like && item.like.length > 0,
    modifier: item.modifierRu || item.modifierEn,
    price: price,
    options: convertOptions(item.options),
    discount: discount,
  };
}
