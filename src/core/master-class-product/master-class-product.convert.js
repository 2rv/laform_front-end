import { convertMultiProducts } from '../../lib/common/product-converters';

export function performMasterClassProductData(rowData, basket) {
  //   console.log(rowData);
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    discount: rowData?.discount,
    name: rowData.titleRu,
    categories: rowData.categories.map((item) => item.textRu),
    cart: Boolean(
      basket?.find((bItem) => bItem?.masterClass?.id === rowData.id),
    ),
    description: rowData.descriptionRu,
    images: rowData.images.map((item) => item.fileUrl),
    programs: rowData.programs.map((item, index) => ({
      id: item.id,
      tid: item.programNameRu,
      price: item.price,
      vendorCode: item.vendorCode,
    })),
    like: rowData?.like ? (rowData.like?.length ? true : false) : null,
    recommendations: convertMultiProducts(
      rowData.recommendationProduct,
      basket,
    ),
  };
}
