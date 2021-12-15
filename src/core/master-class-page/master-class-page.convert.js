export function convertPurchasedMasterClassData(rowData) {
  return {
    id: rowData.id,
    createdDate: rowData?.createdDate,
    expiredDate: rowData?.expiredDate,
    name: rowData?.masterClassId?.titleRu || rowData.titleEn,
    type: rowData?.masterClassId?.type,
    materials:
      rowData?.masterClassId?.materialRu || rowData?.masterClassId?.materialEn,
    articleText:
      rowData?.masterClassId?.articleRu || rowData?.masterClassId?.articleEn,
  };
}
