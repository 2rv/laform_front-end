import { BasicPatternType } from 'src/lib/basic-types';
import {
  convertMultiProducts,
  convertOptions,
} from 'src/lib/common/product-converters';
import { PatternType } from './patterns-product.type';

export function convertPatternsProductData(
  data: BasicPatternType,
): PatternType {
  return {
    id: data.id,
    type: data.type,
    isCount: data.isCount,
    optionType: data.optionType,
    modifier: data.modifierRu,
    name: data.titleRu,

    description: data.descriptionRu,
    descriptionOld: data.descriptionOld?.replaceAll(/\\n/g, '<br />'),

    materials: data.materialRu,
    materialOld: data.materialOld
      ?.replaceAll(/\\n</g, '<')
      .replaceAll(/\\n/g, '<br />'),

    complexity: data.complexity,
    vendorCode: data.vendorCode,
    price: +data.price,
    discount: data.discount,
    count: data.count,
    categories: data.categories,
    images: data.images.map((item) => item.fileUrl),
    sizes: convertOptions(data.options, data.optionType, 2),
    like: data.like && Boolean(data.like.length),
    recommendations: convertMultiProducts(
      data.recommendation?.recommendationProducts,
    ),
  };
}
