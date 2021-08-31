import {
  PRODUCT_FIELD_NAME,
  SELECT_OPTIONS,
  CREATE_PRODUCT_KEY,
} from './create-product.type';

export function convertationForUploadData(imageUrls, formValues) {
  const type = formValues[PRODUCT_FIELD_NAME.TYPE];

  //----------------------------------------------------------------------
  const data = {
    [PRODUCT_FIELD_NAME.NAME]: formValues[PRODUCT_FIELD_NAME.NAME],
    [PRODUCT_FIELD_NAME.MODIFIER]: formValues[PRODUCT_FIELD_NAME.MODIFIER],
    [PRODUCT_FIELD_NAME.TYPE]:
      SELECT_OPTIONS[PRODUCT_FIELD_NAME.TYPE][
        formValues[PRODUCT_FIELD_NAME.TYPE]
      ],
    [PRODUCT_FIELD_NAME.CATEGORIES]: formValues[
      PRODUCT_FIELD_NAME.CATEGORIES
    ].map((item) => ({
      [PRODUCT_FIELD_NAME.CATEGORY]: item,
    })),
    [PRODUCT_FIELD_NAME.DESCRIPTION]:
      formValues[PRODUCT_FIELD_NAME.DESCRIPTION],
    [PRODUCT_FIELD_NAME.DISCOUNT]: formValues[PRODUCT_FIELD_NAME.DISCOUNT],
    [PRODUCT_FIELD_NAME.IMAGES]: [imageUrls],
  };
  const file = {};
  //---------------------------------------------------------------------- мастер-классы

  if (type === 0) {
    data[PRODUCT_FIELD_NAME.PROGRAMS] = formValues[PRODUCT_FIELD_NAME.PROGRAMS];
  }

  //---------------------------------------------------------------------- электронные выкройки

  if (type === 1) {
    file[PRODUCT_FIELD_NAME.FILE] = formValues[PRODUCT_FIELD_NAME.FILE];
    (data[PRODUCT_FIELD_NAME.PRICE] = formValues[PRODUCT_FIELD_NAME.PRICE]),
      (data[PRODUCT_FIELD_NAME.COMPLEXITY] =
        formValues[PRODUCT_FIELD_NAME.COMPLEXITY]),
      (data[PRODUCT_FIELD_NAME.MATERIAL] =
        formValues[PRODUCT_FIELD_NAME.MATERIAL]);
  }

  //---------------------------------------------------------------------- печатные выкройки

  if (type === 2) {
    (data[PRODUCT_FIELD_NAME.COMPLEXITY] =
      formValues[PRODUCT_FIELD_NAME.COMPLEXITY]),
      (data[PRODUCT_FIELD_NAME.MATERIAL] =
        formValues[PRODUCT_FIELD_NAME.MATERIAL]);
    data[PRODUCT_FIELD_NAME.SIZES] = formValues[PRODUCT_FIELD_NAME.SIZES];
  }

  //---------------------------------------------------------------------- товары для шитья

  if (type === 3) {
    data[PRODUCT_FIELD_NAME.SIZES] = formValues[PRODUCT_FIELD_NAME.SIZES];
    (data[PRODUCT_FIELD_NAME.COUNT] = formValues[PRODUCT_FIELD_NAME.COUNT]),
      (data[PRODUCT_FIELD_NAME.COLORS] = formValues[PRODUCT_FIELD_NAME.COLORS]);
  }

  //----------------------------------------------------------------------

  return { convertedData: data, type };
}
