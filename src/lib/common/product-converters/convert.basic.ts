import {
  CardArticleType,
  CardSewingGoodType,
  CardPatternType,
  CardMasterClassType,
} from '../../element/card';

import {
  BasicArticleType,
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
} from 'src/lib/basic-types';

import {
  convertOptions,
  checkMinPriceAndDiscount,
  getPrice,
} from './convert.utils';

export function masterClassItemConverter(
  item: BasicMasterClassType,
): CardMasterClassType {
  return {
    id: item.id,
    name: item.titleRu || item.titleEn,
    image: item.images[0]?.fileUrl,
    like: item.like && Boolean(item.like.length),
    type: item.type || 0,
    deleted: item.deleted,
    modifier: item.modifierRu || item.modifierEn,
    price: getPrice({ price: item.price }),
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
    like: item.like && Boolean(item.like.length),
    deleted: item.deleted,
    modifier: item.modifierRu || item.modifierEn,
    modifierColor: item.modifierColor,
    createdDate: item.createdDate,
  };
}

export function convertPatternItemConverter(
  item: BasicPatternType,
): CardPatternType {
  const { price, discount } = checkMinPriceAndDiscount(
    item.options,
    item.price,
    item.discount,
  );
  return {
    id: item.id,
    type: item.type,
    name: item.titleRu || item.titleEn,
    image: item.images?.[0]?.fileUrl,
    like: item.like && Boolean(item.like.length),
    deleted: item.deleted,
    modifier: item.modifierRu || item.modifierEn,
    complexity: item.complexity,
    sizes: convertOptions(item.options, item.optionType, 2),
    price: price,
    discount: discount,
    count: item.count,
    isCount: item.isCount,
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
  return {
    id: item.id,
    type: item.type,
    name: item.titleRu || item.titleEn,
    image: item.images?.[0]?.fileUrl,
    like: item.like && Boolean(item.like.length),
    deleted: item.deleted,
    modifier: item.modifierRu || item.modifierEn,
    colors: convertOptions(item.options, item.optionType, 3),
    sizes: convertOptions(item.options, item.optionType, 2),
    options: convertOptions(item.options, item.optionType, 1),
    count: item.count,
    length: getPrice({ price: item.length }),
    price: price,
    discount: discount,
    isCount: item.isCount,
    isLength: item.isLength,
  };
}
