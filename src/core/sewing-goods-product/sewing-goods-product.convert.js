import { convertMultiProducts } from 'src/lib/common/product-converters';

export function performSewingGoodsProductData(rowData, basket) {
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    discount: rowData?.discount,
    name: rowData.titleRu,
    categories: rowData.categories,
    cart: Boolean(
      basket?.find((bItem) => bItem?.sewingProduct?.id === rowData.id),
    ),
    description: rowData.descriptionRu,
    images: rowData.images.map((item) => item.fileUrl),
    sizes: rowData.sizes.map((item, index) => ({
      id: item.id,
      tid: item.size,
      price: item.price,
      vendorCode: item.vendorCode,
    })),
    colors: rowData.colors.map((item, index) => ({
      id: item.id,
      tid: item.color,
    })),
    like: rowData?.like ? (rowData.like?.length ? true : false) : null,
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
      basket,
    ),
  };
}
