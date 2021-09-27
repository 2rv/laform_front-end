export function convertPurchasedMasterClassData(rowData) {
  return {
    id: rowData.id,
    createdDate: rowData?.createdDate,
    name: rowData?.masterClassId?.titleRu,
    type: rowData?.masterClassId?.type,
    articleText: rowData?.program?.articleText,
  };
}
