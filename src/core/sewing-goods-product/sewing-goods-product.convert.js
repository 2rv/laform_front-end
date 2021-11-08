import {
  convertMultiProducts,
  convertOptions,
} from 'src/lib/common/product-converters';

export function performSewingGoodsProductData(rowData) {
  return {
    id: rowData.id,
    type: rowData.type,
    name: rowData.titleRu || rowData.titleEn,
    modifier: rowData.modifierRu || rowData.modifierEn,
    price: rowData.price,
    discount: rowData.discount,
    count: rowData.count,
    length: rowData.length,
    vendorCode: rowData.vendorCode,
    categories: rowData.categories,
    description: rowData.descriptionRu || rowData.descriptionEn,
    images: rowData.images.map((item) => item.fileUrl),
    options: convertOptions(rowData.options, rowData.optionType, 1),
    sizes: convertOptions(rowData.options, rowData.optionType, 2),
    colors: convertOptions(rowData.options, rowData.optionType, 3),
    like: rowData?.like ? (rowData.like?.length ? true : false) : null,
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
    ),
  };
}
