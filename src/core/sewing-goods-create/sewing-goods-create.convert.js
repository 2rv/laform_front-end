import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';

export function convertForUpload(imageUrls, formValues) {
  return {
    [SEWING_GOODS_FIELD_NAME.NAME]: formValues[SEWING_GOODS_FIELD_NAME.NAME],
    [SEWING_GOODS_FIELD_NAME.MODIFIER]:
      formValues[SEWING_GOODS_FIELD_NAME.MODIFIER],
    [SEWING_GOODS_FIELD_NAME.CATEGORIES]: formValues[
      SEWING_GOODS_FIELD_NAME.CATEGORIES
    ].map((item) => ({ [SEWING_GOODS_FIELD_NAME.CATEGORY]: item })),
    [SEWING_GOODS_FIELD_NAME.DESCRIPTION]:
      formValues[SEWING_GOODS_FIELD_NAME.DESCRIPTION],
    [SEWING_GOODS_FIELD_NAME.DISCOUNT]:
      formValues[SEWING_GOODS_FIELD_NAME.DISCOUNT],
    [SEWING_GOODS_FIELD_NAME.IMAGES]: imageUrls,
    [SEWING_GOODS_FIELD_NAME.SIZES]: formValues[SEWING_GOODS_FIELD_NAME.SIZES],
    [SEWING_GOODS_FIELD_NAME.COLORS]:
      formValues[SEWING_GOODS_FIELD_NAME.COLORS],
    [SEWING_GOODS_FIELD_NAME.TYPE]: 3,
    [SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS]: {
      recommendationProducts:
        formValues[SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS],
    },
  };
}
