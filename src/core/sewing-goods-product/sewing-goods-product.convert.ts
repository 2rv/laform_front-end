import { BasicSewingGoodType } from 'src/lib/basic-types';
import {
  convertMultiProducts,
  convertOptions,
} from 'src/lib/common/product-converters';
import { SewingProductType } from './sewing-goods-product.type';

export function convertSewingGoodsProductData(
  data: BasicSewingGoodType,
): SewingProductType {
  return {
    id: data.id,
    type: data.type,
    isCount: data.isCount,
    isLength: data.isLength,
    optionType: data.optionType,
    name: data.titleRu,
    modifier: data.modifierRu,
    price: +data.price,
    discount: data.discount,
    count: data.count,
    length: +data.length,
    vendorCode: data.vendorCode,
    categories: data.categories,
    description: data.descriptionRu,
    images: data.images.map((item) => item.fileUrl),
    options: convertOptions(data.options, data.optionType, 1),
    sizes: convertOptions(data.options, data.optionType, 2),
    colors: convertOptions(data.options, data.optionType, 3),
    like: data.like && Boolean(data.like.length),
    recommendations: convertMultiProducts(
      data.recommendation?.recommendationProducts,
    ),
  };
}
