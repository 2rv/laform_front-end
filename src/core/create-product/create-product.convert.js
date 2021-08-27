import { SELECT_OPTIONS_DATA } from './create-product.constant';
import { PRODUCT_FIELD_NAME } from './create-product.type';

export function convertationForUploadData(imageUrls, formValues) {
  const type = Number(formValues[PRODUCT_FIELD_NAME.TYPE]);

  //----------------------------------------------------------------------

  const data = {
    [PRODUCT_FIELD_NAME.NAME]: formValues[PRODUCT_FIELD_NAME.NAME],
    [PRODUCT_FIELD_NAME.MODIFIER]: formValues[PRODUCT_FIELD_NAME.MODIFIER],
    [PRODUCT_FIELD_NAME.TYPE]:
      SELECT_OPTIONS_DATA[PRODUCT_FIELD_NAME.TYPE][
        formValues[PRODUCT_FIELD_NAME.TYPE]
      ],
    [PRODUCT_FIELD_NAME.CATEGORIES]: formValues[
      PRODUCT_FIELD_NAME.CATEGORIES
    ].map(
      (item) =>
        SELECT_OPTIONS_DATA[PRODUCT_FIELD_NAME.CATEGORY_NAME][
          item[PRODUCT_FIELD_NAME.CATEGORY_NAME]
        ],
    ),
    [PRODUCT_FIELD_NAME.DESCRIPTION]:
      formValues[PRODUCT_FIELD_NAME.DESCRIPTION],
    [PRODUCT_FIELD_NAME.DISCOUNT]: Number(
      formValues[PRODUCT_FIELD_NAME.DISCOUNT],
    ),
    [PRODUCT_FIELD_NAME.IMAGES]: [imageUrls],
  };
  const file = {};
  //---------------------------------------------------------------------- мастер-классы

  if (type === 0) {
    data[PRODUCT_FIELD_NAME.PROGRAMS] = formValues[PRODUCT_FIELD_NAME.PROGRAMS];
  }

  //---------------------------------------------------------------------- электронные выкройки

  if (type === 1) {
    file[PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_FILE] =
      formValues[PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_FILE];
    data[PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_PRICE] = Number(
      formValues[PRODUCT_FIELD_NAME.ELECTRONIC_PATTERN_PRICE],
    );
    data[PRODUCT_FIELD_NAME.COMPLEXITY] = Number(
      formValues[PRODUCT_FIELD_NAME.COMPLEXITY],
    );
    data[PRODUCT_FIELD_NAME.MATERIAL] = formValues[PRODUCT_FIELD_NAME.MATERIAL];
  }

  //---------------------------------------------------------------------- печатные выкройки

  if (type === 2) {
    data[PRODUCT_FIELD_NAME.COMPLEXITY] = Number(
      formValues[PRODUCT_FIELD_NAME.COMPLEXITY],
    );

    data[PRODUCT_FIELD_NAME.MATERIAL] = formValues[PRODUCT_FIELD_NAME.MATERIAL];
    data[PRODUCT_FIELD_NAME.SIZES] = formValues[PRODUCT_FIELD_NAME.SIZES];
  }

  //---------------------------------------------------------------------- товары для шитья

  if (type === 3) {
    data[PRODUCT_FIELD_NAME.SIZES] = formValues[PRODUCT_FIELD_NAME.SIZES];
    data[PRODUCT_FIELD_NAME.COUNT] = Number(
      formValues[PRODUCT_FIELD_NAME.COUNT],
    );
    data[PRODUCT_FIELD_NAME.COLORS] = formValues[PRODUCT_FIELD_NAME.COLORS];
  }

  //----------------------------------------------------------------------

  return { convertedData: data, type };
}
