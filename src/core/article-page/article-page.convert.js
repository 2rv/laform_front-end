import { convertMultiProducts } from 'src/lib/common/product-converters';

export function performArticleProductData(rowData, basket) {
  return {
    id: rowData.id,
    type: rowData.type,
    modifier: rowData?.modifierRu,
    name: rowData.titleRu,
    categories: rowData.categories.map((item) => item.categoryNameRu),
    postArticle: rowData.articleRu,
    createdDate: rowData.createdDate,
    recommendations: convertMultiProducts(
      rowData.recommendation?.recommendationProducts,
      basket,
    ),
  };
}
