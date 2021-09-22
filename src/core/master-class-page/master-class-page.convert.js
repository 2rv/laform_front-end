export function convertPurchasedMasterClassData(rowData) {
  return {
    id: rowData.id,
    type: rowData?.type,
    name: rowData?.titleRu,
    articleText: rowData?.articleText,
    createdDate: rowData?.createdDate,
  };
}
