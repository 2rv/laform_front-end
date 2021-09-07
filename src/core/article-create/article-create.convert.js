import { ARTICLE_FIELD_NAME } from './article-create.type';

export function convertForUpload(imageUrl, formValues) {
  return {
    [ARTICLE_FIELD_NAME.NAME]: formValues[ARTICLE_FIELD_NAME.NAME],
    [ARTICLE_FIELD_NAME.MODIFIER]: formValues[ARTICLE_FIELD_NAME.MODIFIER],
    [ARTICLE_FIELD_NAME.IMAGES]: imageUrl,
    [ARTICLE_FIELD_NAME.CATEGORIES]: formValues[
      ARTICLE_FIELD_NAME.CATEGORIES
    ].map((item) => ({ [ARTICLE_FIELD_NAME.CATEGORY]: item })),
    [ARTICLE_FIELD_NAME.RECOMENDATIONS]:
      formValues[ARTICLE_FIELD_NAME.RECOMENDATIONS],
    [ARTICLE_FIELD_NAME.ARTICLE]: formValues[ARTICLE_FIELD_NAME.ARTICLE],
  };
}
