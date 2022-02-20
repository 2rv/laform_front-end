import { BasicMasterClassType } from 'src/lib/basic-types';
import { convertMultiProducts } from 'src/lib/common/product-converters';
import { MasterClassType } from './master-class-product.type';

export function convertMasterClassProductData(
  data: BasicMasterClassType,
): MasterClassType {
  return {
    id: data.id,
    type: data.type,
    vendorCode: data.vendorCode,
    modifier: data.modifierRu,
    name: data.titleRu,
    description: data.descriptionRu,
    materials: data.materialRu,
    price: +data.price,
    discount: data.discount,
    categories: data.categories,
    images: data.images.map((item) => item?.fileUrl),
    like: data.like && Boolean(data.like.length),
    recommendations: convertMultiProducts(
      data.recommendation?.recommendationProducts,
    ),
  };
}
