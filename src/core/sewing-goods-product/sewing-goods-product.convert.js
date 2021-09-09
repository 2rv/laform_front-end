export function performSewingGoodsProductData(rowData) {
  console.log(rowData);
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
      id: index,
      tid: item.size,
      price: item.price,
    })),
    colors: rowData.colors.map((item, index) => ({
      id: index,
      tid: item.color,
      price: item.price,
    })),
    count: rowData.count,
  };
}
