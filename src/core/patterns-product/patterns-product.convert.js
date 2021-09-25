import { convertMultiProducts } from 'src/lib/common/product-converters';

export function performPatternProductData(rowData, basket) {
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    discount: rowData?.discount,
    name: rowData.titleRu,
    description: rowData.descriptionRu,
    categories: rowData.categories.map((item) => item.textRu),
    images: rowData.images.map((item) => item.fileUrl),
    cart: Boolean(
      basket?.find((bItem) => bItem?.patternProduct?.id === rowData.id),
    ),
    sizes: rowData.sizes.map((item, index) => ({
      id: item.id,
      tid: item.size,
      price: item.price,
      vendorCode: item.vendorCode,
    })),
    materials: rowData.materialRu,
    complexity: rowData.complexity,
    filePdf: rowData.filePdf,
    like: rowData?.like ? (rowData.like?.length ? true : false) : null,
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
      basket,
    ),
  };
}
