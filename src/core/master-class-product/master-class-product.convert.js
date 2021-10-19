import { convertMultiProducts } from '../../lib/common/product-converters';

export function performMasterClassProductData(rowData, basket) {
  return {
    id: rowData.id,
    type: rowData.type,
    vendorCode: rowData.vendorCode,
    modifier: rowData.modifierRu || rowData.modifierEn,
    name: rowData.titleRu || rowData.titleEn,
    description: rowData.descriptionRu || rowData.descriptionEn,
    price: rowData.price,
    discount: rowData?.discount,
    categories: rowData.categories,
    images: rowData.images.map((item) => item.fileUrl),
    like: rowData?.like ? (rowData.like?.length ? true : false) : null,
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
      basket,
    ),
  };
}
