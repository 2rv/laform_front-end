import { ARTICLE_FIELD_NAME } from './article-create.type';

export function convertForUpload(imageUrl, formValues) {
  const categories = formValues[ARTICLE_FIELD_NAME.CATEGORIES].map((item) => ({
    id: item.basicId,
  }));
  const recommendations =
    formValues[ARTICLE_FIELD_NAME.RECOMMENDATIONS].length === 0
      ? null
      : {
          recommendationProducts:
            formValues[ARTICLE_FIELD_NAME.RECOMMENDATIONS],
        };

  return {
    [ARTICLE_FIELD_NAME.DELETED]: formValues[ARTICLE_FIELD_NAME.DELETED],
    [ARTICLE_FIELD_NAME.NAME]: formValues[ARTICLE_FIELD_NAME.NAME],
    [ARTICLE_FIELD_NAME.VENDOR_CODE]:
      formValues[ARTICLE_FIELD_NAME.VENDOR_CODE],
    [ARTICLE_FIELD_NAME.MODIFIER]: formValues[ARTICLE_FIELD_NAME.MODIFIER],
    [ARTICLE_FIELD_NAME.IMAGE]: imageUrl,
    [ARTICLE_FIELD_NAME.CATEGORIES]: categories,
    [ARTICLE_FIELD_NAME.RECOMMENDATIONS]: recommendations,
    [ARTICLE_FIELD_NAME.ARTICLE]: formValues[ARTICLE_FIELD_NAME.ARTICLE],
    [ARTICLE_FIELD_NAME.IN_ENGLISH]: formValues[ARTICLE_FIELD_NAME.IN_ENGLISH],
  };
}

export function convertForChange(rowData) {
  const recommendations = rowData[ARTICLE_FIELD_NAME.CATEGORIES].map((i) => ({
    basicId: i.id,
    tid: i.categoryNameRu,
  }));
  return {
    [ARTICLE_FIELD_NAME.DELETED]: rowData[ARTICLE_FIELD_NAME.DELETED],
    [ARTICLE_FIELD_NAME.NAME]: rowData[ARTICLE_FIELD_NAME.NAME],
    [ARTICLE_FIELD_NAME.VENDOR_CODE]: rowData[ARTICLE_FIELD_NAME.VENDOR_CODE],
    [ARTICLE_FIELD_NAME.MODIFIER]: rowData[ARTICLE_FIELD_NAME.MODIFIER],
    [ARTICLE_FIELD_NAME.IMAGES]: [rowData[ARTICLE_FIELD_NAME.IMAGE]],
    [ARTICLE_FIELD_NAME.RECOMMENDATIONS]: convertRecommendations(
      rowData.recommendation?.recommendationProducts,
    ),
    [ARTICLE_FIELD_NAME.CATEGORIES]: recommendations,
    [ARTICLE_FIELD_NAME.ARTICLE]: rowData[ARTICLE_FIELD_NAME.ARTICLE] || {},
    [ARTICLE_FIELD_NAME.IN_ENGLISH]: !!rowData[ARTICLE_FIELD_NAME.IN_ENGLISH],
  };
}

function convertRecommendations(recommendation = []) {
  return recommendation.map((item) => {
    return {
      masterClassId: item.masterClassId,
      patternProductId: item.patternProductId,
      postId: item.postId,
      sewingProductId: item.sewingProductId,
      type:
        item.masterClassId?.type ||
        item.patternProductId?.type ||
        item.postId?.type ||
        item.sewingProductId?.type,
    };
  });
}
