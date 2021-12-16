import { convertMultiProducts } from '../../lib/common/product-converters';

export function performMasterClassProductData(rowData) {
  return {
    id: rowData.id,
    type: rowData.type,
    vendorCode: rowData.vendorCode,
    modifier: rowData.modifierRu || rowData.modifierEn,
    name: rowData.titleRu || rowData.titleEn,
    description: rowData.descriptionRu || rowData.descriptionEn,
    materials: rowData.materialRu || rowData.materialEn,
    price: rowData.price,
    discount: rowData?.discount,
    categories: rowData.categories,
    images: rowData.images.map((item) => item.fileUrl),
    like: rowData.like && Boolean(rowData.like.length),
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
    ),
  };
}
