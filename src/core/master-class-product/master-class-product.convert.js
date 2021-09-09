export function performMasterClassProductData(rowData) {
  console.log(rowData);
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    discount: rowData?.discount,
    name: rowData.titleRu,
    categories: rowData.categories.map((item) => item.textRu),
    comment: rowData.comment,
    description: rowData.descriptionRu,
    images: rowData.images.map((item) => item.fileUrl),
    programs: rowData.programs.map((item, index) => ({
      id: index,
      tid: item.programNameRu,
      price: item.price,
    })),
  };
}
