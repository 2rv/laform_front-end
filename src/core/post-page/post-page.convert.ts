import { BasicPostType } from 'src/lib/basic-types';
import { convertMultiProducts } from 'src/lib/common/product-converters';
import { PostType } from './post-page.type';

export function convertPost(data: BasicPostType): PostType {
  return {
    id: data.id,
    type: data.type,
    name: data.titleRu,
    postArticle: data.articleRu,
    createdDate: data.createdDate,
    recommendations: convertMultiProducts(
      data.recommendation?.recommendationProducts,
    ),
  };
}
