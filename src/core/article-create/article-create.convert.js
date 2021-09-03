import { ARTICLE_FIELD_NAME } from './article-create.type';

export function convertForUpload(imageUrls, formValues) {
  return {
    [ARTICLE_FIELD_NAME.NAME]: formValues[ARTICLE_FIELD_NAME.NAME],
    [ARTICLE_FIELD_NAME.MODIFIER]: formValues[ARTICLE_FIELD_NAME.MODIFIER],
    [ARTICLE_FIELD_NAME.IMAGES]: [imageUrls],
    [ARTICLE_FIELD_NAME.CATEGORIES]: formValues[
      ARTICLE_FIELD_NAME.CATEGORIES
    ].map((item) => ({ [ARTICLE_FIELD_NAME.CATEGORY]: item })),
  };
}
