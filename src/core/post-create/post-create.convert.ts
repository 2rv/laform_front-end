import { BasicFileType, BasicPostType } from 'src/lib/basic-types';
import { PostDto } from 'src/lib/basic-types/create';
import { convertRecommendations } from 'src/lib/common/block-select-recomendation';
import { PostValues, POST_FIELD_NAME } from './post-create.type';

export function convertForSave(
  imageUrl: BasicFileType,
  values: PostValues,
): PostDto {
  const categories = values[POST_FIELD_NAME.CATEGORIES].map((item) => ({
    id: item.basicId,
  }));

  return {
    image: imageUrl,
    categories: categories,
    recommendation: values[POST_FIELD_NAME.RECOMMENDATIONS],
    titleRu: values[POST_FIELD_NAME.NAME],
    modifierRu: values[POST_FIELD_NAME.MODIFIER],
    articleRu: values[POST_FIELD_NAME.POST] || { blocks: [] },
    vendorCode: values[POST_FIELD_NAME.VENDOR_CODE],
    deleted: !values[POST_FIELD_NAME.IS_PUBLIC],
    inEnglish: values[POST_FIELD_NAME.IN_ENGLISH],
  };
}

export function convertForChange(data: BasicPostType): PostValues {
  const categories = data.categories.map((i, index) => ({
    id: index,
    basicId: i.id,
    tid: i.categoryNameRu,
  }));

  return {
    [POST_FIELD_NAME.IMAGES]: [data.image],
    [POST_FIELD_NAME.NAME]: data.titleRu,
    [POST_FIELD_NAME.MODIFIER]: data.modifierRu,
    [POST_FIELD_NAME.VENDOR_CODE]: data.vendorCode,
    [POST_FIELD_NAME.CATEGORIES]: categories,
    [POST_FIELD_NAME.POST]: data.articleRu,
    [POST_FIELD_NAME.RECOMMENDATIONS]: convertRecommendations(
      data.recommendation,
    ),
    [POST_FIELD_NAME.IS_PUBLIC]: !data.deleted,
    [POST_FIELD_NAME.IN_ENGLISH]: false,
  };
}
