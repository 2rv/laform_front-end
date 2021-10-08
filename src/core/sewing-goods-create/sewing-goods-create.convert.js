import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';

export function convertForUpload(imageUrls, formValues) {
  return {
    [SEWING_GOODS_FIELD_NAME.NAME]: formValues[SEWING_GOODS_FIELD_NAME.NAME],
    [SEWING_GOODS_FIELD_NAME.MODIFIER]:
      formValues[SEWING_GOODS_FIELD_NAME.MODIFIER],
    [SEWING_GOODS_FIELD_NAME.CATEGORIES]: formValues[
      SEWING_GOODS_FIELD_NAME.CATEGORIES
    ].map((item) => {
      id: item.basicId;
    }),
    [SEWING_GOODS_FIELD_NAME.DESCRIPTION]:
      formValues[SEWING_GOODS_FIELD_NAME.DESCRIPTION],
    [SEWING_GOODS_FIELD_NAME.IMAGES]: imageUrls,
    [SEWING_GOODS_FIELD_NAME.OPTIONS]:
      formValues[SEWING_GOODS_FIELD_NAME.OPTIONS],
    [SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS]: {
      recommendationProducts:
        formValues[SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS],
    },
  };
}
