export function convertPurchasedMasterClassData(rowData) {
  return {
    id: rowData.id,
    createdDate: rowData?.createdDate,
    name: rowData?.masterClassId?.titleRu || rowData.titleEn,
    type: rowData?.masterClassId?.type,
    articleText:
      rowData?.masterClassId?.articleRu || rowData?.masterClassId?.articleEn,
  };
}
