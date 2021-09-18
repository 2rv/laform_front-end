export function performArticleProductData(rowData) {
  console.log(rowData);
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    name: rowData.titleRu,
    categories: rowData.categories.map((item) => item.textRu),
    postArticle: rowData.articleText,
    createdDate: rowData.createdDate,
  };
}
