import { convertMultiProducts } from 'src/lib/common/product-converters';

export function performArticleProductData(rowData, basket) {
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifier,
    name: rowData.titleRu,
    categories: rowData.categories.map((item) => item.textRu),
    postArticle: rowData.articleText,
    createdDate: rowData.createdDate,
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
      basket,
    ),
  };
}
