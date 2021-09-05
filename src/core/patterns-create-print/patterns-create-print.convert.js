import { PRINT_PATTERN_FIELD_NAME } from './patterns-create-print.type';

export function convertForUpload(imageUrls, formValues) {
  return {
    [PRINT_PATTERN_FIELD_NAME.IMAGES]: imageUrls,
    [PRINT_PATTERN_FIELD_NAME.NAME]: formValues[PRINT_PATTERN_FIELD_NAME.NAME],
    [PRINT_PATTERN_FIELD_NAME.MODIFIER]:
      formValues[PRINT_PATTERN_FIELD_NAME.MODIFIER],
    [PRINT_PATTERN_FIELD_NAME.CATEGORIES]: formValues[
      PRINT_PATTERN_FIELD_NAME.CATEGORIES
    ].map((item) => ({ [PRINT_PATTERN_FIELD_NAME.CATEGORY]: item })),
    [PRINT_PATTERN_FIELD_NAME.DESCRIPTION]:
      formValues[PRINT_PATTERN_FIELD_NAME.DESCRIPTION],
    [PRINT_PATTERN_FIELD_NAME.MATERIAL]:
      formValues[PRINT_PATTERN_FIELD_NAME.MATERIAL],
    [PRINT_PATTERN_FIELD_NAME.COMPLEXITY]:
      formValues[PRINT_PATTERN_FIELD_NAME.COMPLEXITY],
    [PRINT_PATTERN_FIELD_NAME.SIZES]:
      formValues[PRINT_PATTERN_FIELD_NAME.SIZES],
    [PRINT_PATTERN_FIELD_NAME.DISCOUNT]:
      formValues[PRINT_PATTERN_FIELD_NAME.DISCOUNT],
    [PRINT_PATTERN_FIELD_NAME.RECOMENDATIONS]:
      formValues[PRINT_PATTERN_FIELD_NAME.RECOMENDATIONS],
    [PRINT_PATTERN_FIELD_NAME.TYPE]: 2,
  };
}
