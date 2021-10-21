import { ARTICLE_FIELD_NAME } from './article-create.type';

export function convertForUpload(imageUrls, formValues) {
  return {
    [ARTICLE_FIELD_NAME.NAME]: formValues[ARTICLE_FIELD_NAME.NAME],
    [ARTICLE_FIELD_NAME.MODIFIER]: formValues[ARTICLE_FIELD_NAME.MODIFIER],
    [ARTICLE_FIELD_NAME.IMAGE]: imageUrls,
    [ARTICLE_FIELD_NAME.CATEGORIES]: formValues[
      ARTICLE_FIELD_NAME.CATEGORIES
    ].map((item) => ({
      id: item.basicId,
    })),
    [ARTICLE_FIELD_NAME.RECOMMENDATIONS]: {
      recommendationProducts: formValues[ARTICLE_FIELD_NAME.RECOMMENDATIONS],
    },

    [ARTICLE_FIELD_NAME.ARTICLE]: formValues[ARTICLE_FIELD_NAME.ARTICLE],
  };
}
