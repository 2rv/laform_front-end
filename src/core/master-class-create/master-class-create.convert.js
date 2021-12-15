import { CREATE_MASTER_CLASS_FIELD_NAME } from './master-class-create.type';

export function convertForUpload(imageUrls, formValues) {
  const categories = formValues[CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES].map(
    (item) => ({
      id: item.basicId,
    }),
  );
  const recommendations =
    formValues[CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS].length === 0
      ? null
      : {
          recommendationProducts:
            formValues[CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS],
        };
  return {
    [CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]: imageUrls,
    [CREATE_MASTER_CLASS_FIELD_NAME.NAME]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.NAME],
    [CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE],
    [CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER],
    [CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES]: categories,
    [CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION],
    [CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL],
    [CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE],
    [CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT],
    [CREATE_MASTER_CLASS_FIELD_NAME.PRICE]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.PRICE],
    [CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]: recommendations,
    [CREATE_MASTER_CLASS_FIELD_NAME.DELETED]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.DELETED],
    [CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH],
  };
}
export function convertForChange(rowData) {
  const categories = rowData[CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES].map(
    (i) => ({
      basicId: i.id,
      tid: i.categoryNameRu,
    }),
  );
  return {
    [CREATE_MASTER_CLASS_FIELD_NAME.NAME]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.NAME],
    [CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.VENDOR_CODE],
    [CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION],
    [CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER],
    [CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.IMAGES],
    [CREATE_MASTER_CLASS_FIELD_NAME.DELETED]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.DELETED],
    [CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.MATERIAL] || [],
    [CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]: convertRecommendations(
      rowData.recommendation?.recommendationProducts,
    ),
    [CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES]: categories,
    [CREATE_MASTER_CLASS_FIELD_NAME.PRICE]:
      +rowData[CREATE_MASTER_CLASS_FIELD_NAME.PRICE],
    [CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT],
    [CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE]:
      rowData[CREATE_MASTER_CLASS_FIELD_NAME.ARTICLE] || [],
    [CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH]:
      !!rowData[CREATE_MASTER_CLASS_FIELD_NAME.IN_ENGLISH],
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

export function convertForUpdateImage(newImages = [], formValues) {
  let indexImage = 0;
  return formValues.images.map((item) => {
    if (!Boolean(item.id) && indexImage < newImages.length) {
      item.id = newImages[indexImage].id;
      indexImage = indexImage + 1;
    }
    return {
      id: item.id,
    };
  });
}
