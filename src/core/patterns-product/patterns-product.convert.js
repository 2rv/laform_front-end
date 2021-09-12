export function performPatternProductData(rowData) {
  console.log(rowData);
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    discount: rowData?.discount,
    name: rowData.titleRu,
    description: rowData.descriptionRu,
    categories: rowData.categories.map((item) => item.textRu),
    images: rowData.images.map((item) => item.fileUrl),
    sizes: rowData.sizes.map((item, index) => ({
      id: index,
      tid: item.size,
      price: item.price,
    })),
    materials: rowData.materialRu,
    price: rowData.price,
    complexity: rowData.complexity,
  };
}
