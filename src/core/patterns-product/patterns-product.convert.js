import {
  convertMultiProducts,
  convertOptions,
} from 'src/lib/common/product-converters';

export function performPatternProductData(rowData, basket) {
  return {
    id: rowData.id,
    type: rowData.type,
    optionType: rowData.optionType,
    modifier: rowData.modifierRu || rowData.modifierEn,
    name: rowData.titleRu || rowData.titleEn,
    description: rowData.descriptionRu || rowData.descriptionEn,
    materials: rowData.materialRu || rowData.materialEn,
    complexity: rowData.complexity,
    vendorCode: rowData.vendorCode,
    price: rowData.price,
    discount: rowData.discount,
    count: rowData.count,
    categories: rowData.categories,
    images: rowData.images.map((item) => item.fileUrl),
    sizes: convertOptions(rowData.options, rowData.optionType, 2),
    like: rowData?.like ? (rowData.like?.length ? true : false) : null,
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
      basket,
    ),
  };
}
