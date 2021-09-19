export function performSewingGoodsProductData(rowData) {
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    discount: rowData?.discount,
    name: rowData.titleRu,
    categories: rowData.categories.map((item) => item.textRu),
    description: rowData.descriptionRu,
    images: rowData.images.map((item) => item.fileUrl),
    sizes: rowData.sizes.map((item, index) => ({
      id: item.id,
      tid: item.size,
      price: item.price,
      count: item.count,
      vendorCode: item.vendorCode,
    })),
    colors: rowData.colors.map((item, index) => ({
      id: item.id,
      tid: item.color,
    })),
    like: rowData?.like ? (rowData.like?.length ? true : false) : null,
  };
}
