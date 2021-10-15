import { SEWING_GOODS_FIELD_NAME } from './sewing-goods-create.type';

export function convertForUpload(imageUrls, formValues) {
  return {
    [SEWING_GOODS_FIELD_NAME.NAME]: formValues[SEWING_GOODS_FIELD_NAME.NAME],
    [SEWING_GOODS_FIELD_NAME.MODIFIER]:
      formValues[SEWING_GOODS_FIELD_NAME.MODIFIER],
    [SEWING_GOODS_FIELD_NAME.CATEGORIES]: formValues[
      SEWING_GOODS_FIELD_NAME.CATEGORIES
    ].map((item) => ({
      id: item.basicId,
    })),
    [SEWING_GOODS_FIELD_NAME.DESCRIPTION]:
      formValues[SEWING_GOODS_FIELD_NAME.DESCRIPTION],
    [SEWING_GOODS_FIELD_NAME.IMAGES]: imageUrls,
    [SEWING_GOODS_FIELD_NAME.PRICE]: formValues[SEWING_GOODS_FIELD_NAME.PRICE],
    [SEWING_GOODS_FIELD_NAME.DISCOUNT]: Boolean(
      formValues[SEWING_GOODS_FIELD_NAME.DISCOUNT],
    )
      ? Math.floor(formValues[SEWING_GOODS_FIELD_NAME.DISCOUNT])
      : undefined,
    [SEWING_GOODS_FIELD_NAME.OPTION_TYPE]:
      formValues[SEWING_GOODS_FIELD_NAME.OPTION_TYPE],
    [SEWING_GOODS_FIELD_NAME.OPTIONS]: formValues[
      SEWING_GOODS_FIELD_NAME.OPTIONS
    ].map((item) => ({
      [SEWING_GOODS_FIELD_NAME.OPTION_COLOR]: Boolean(
        item[SEWING_GOODS_FIELD_NAME.OPTION_COLOR],
      )
        ? item[SEWING_GOODS_FIELD_NAME.OPTION_COLOR]
        : undefined,
      [SEWING_GOODS_FIELD_NAME.OPTION_SIZE]: Boolean(
        item[SEWING_GOODS_FIELD_NAME.OPTION_SIZE],
      )
        ? item[SEWING_GOODS_FIELD_NAME.OPTION_SIZE]
        : undefined,
      [SEWING_GOODS_FIELD_NAME.PRICE]: Boolean(
        item[SEWING_GOODS_FIELD_NAME.PRICE],
      )
        ? item[SEWING_GOODS_FIELD_NAME.PRICE]
        : undefined,
      [SEWING_GOODS_FIELD_NAME.DISCOUNT]: Boolean(
        item[SEWING_GOODS_FIELD_NAME.DISCOUNT],
      )
        ? Math.floor(item[SEWING_GOODS_FIELD_NAME.DISCOUNT])
        : undefined,
      [SEWING_GOODS_FIELD_NAME.OPTION_COUNT]: Boolean(
        item[SEWING_GOODS_FIELD_NAME.OPTION_COUNT],
      )
        ? item[SEWING_GOODS_FIELD_NAME.OPTION_COUNT]
        : undefined,
      [SEWING_GOODS_FIELD_NAME.OPTION_LENGTH]: Boolean(
        item[SEWING_GOODS_FIELD_NAME.OPTION_LENGTH],
      )
        ? item[SEWING_GOODS_FIELD_NAME.OPTION_LENGTH]
        : undefined,
    })),
    [SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS]: {
      recommendationProducts:
        formValues[SEWING_GOODS_FIELD_NAME.RECOMMENDATIONS],
    },
    ...(() => {
      if (formValues[SEWING_GOODS_FIELD_NAME.IS_COUNT]) {
        return Boolean(formValues[SEWING_GOODS_FIELD_NAME.COUNT])
          ? {
              [SEWING_GOODS_FIELD_NAME.COUNT]: Number(
                formValues[SEWING_GOODS_FIELD_NAME.COUNT],
              ),
            }
          : undefined;
      } else if (formValues[SEWING_GOODS_FIELD_NAME.IS_LENGTH]) {
        return Boolean(formValues[SEWING_GOODS_FIELD_NAME.COUNT])
          ? {
              [SEWING_GOODS_FIELD_NAME.LENGTH]: Number(
                formValues[SEWING_GOODS_FIELD_NAME.LENGTH],
              ),
            }
          : undefined;
      } else return {};
    })(),
  };
}
