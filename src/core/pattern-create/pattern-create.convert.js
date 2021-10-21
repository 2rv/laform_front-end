import { CREATE_PATTERN_FIELD_NAME } from './pattern-create.type';

export function convertForUpload(imageUrls, pdfFileUrls, formValues) {
  return {
    [CREATE_PATTERN_FIELD_NAME.NAME]:
      formValues[CREATE_PATTERN_FIELD_NAME.NAME],
    [CREATE_PATTERN_FIELD_NAME.MODIFIER]:
      formValues[CREATE_PATTERN_FIELD_NAME.MODIFIER],

    [CREATE_PATTERN_FIELD_NAME.CATEGORIES]: formValues[
      CREATE_PATTERN_FIELD_NAME.CATEGORIES
    ].map((item) => ({
      id: item.basicId,
    })),
    [CREATE_PATTERN_FIELD_NAME.DESCRIPTION]:
      formValues[CREATE_PATTERN_FIELD_NAME.DESCRIPTION],
    [CREATE_PATTERN_FIELD_NAME.IMAGES]: imageUrls,
    [CREATE_PATTERN_FIELD_NAME.MATERIAL]:
      formValues[CREATE_PATTERN_FIELD_NAME.MATERIAL],
    [CREATE_PATTERN_FIELD_NAME.COMPLEXITY]:
      formValues[CREATE_PATTERN_FIELD_NAME.COMPLEXITY],

    [CREATE_PATTERN_FIELD_NAME.PRICE]:
      formValues[CREATE_PATTERN_FIELD_NAME.PRICE],
    [CREATE_PATTERN_FIELD_NAME.DISCOUNT]: Boolean(
      formValues[CREATE_PATTERN_FIELD_NAME.DISCOUNT],
    )
      ? Math.floor(formValues[CREATE_PATTERN_FIELD_NAME.DISCOUNT])
      : undefined,

    [CREATE_PATTERN_FIELD_NAME.OPTION_TYPE]:
      formValues[CREATE_PATTERN_FIELD_NAME.OPTION_TYPE],
    [CREATE_PATTERN_FIELD_NAME.OPTIONS]: formValues[
      CREATE_PATTERN_FIELD_NAME.OPTIONS
    ].map((item, index) => ({
      [CREATE_PATTERN_FIELD_NAME.OPTION_SIZE]: Boolean(
        item[CREATE_PATTERN_FIELD_NAME.OPTION_SIZE],
      )
        ? item[CREATE_PATTERN_FIELD_NAME.OPTION_SIZE]
        : undefined,
      [CREATE_PATTERN_FIELD_NAME.PRICE]: Boolean(
        item[CREATE_PATTERN_FIELD_NAME.PRICE],
      )
        ? item[CREATE_PATTERN_FIELD_NAME.PRICE]
        : undefined,
      [CREATE_PATTERN_FIELD_NAME.DISCOUNT]: Boolean(
        item[CREATE_PATTERN_FIELD_NAME.DISCOUNT],
      )
        ? Math.floor(item[CREATE_PATTERN_FIELD_NAME.DISCOUNT])
        : undefined,
      [CREATE_PATTERN_FIELD_NAME.OPTION_COUNT]: Boolean(
        item[CREATE_PATTERN_FIELD_NAME.OPTION_COUNT],
      )
        ? item[CREATE_PATTERN_FIELD_NAME.OPTION_COUNT]
        : undefined,
      [CREATE_PATTERN_FIELD_NAME.OPTION_FILE]: pdfFileUrls[index],
    })),
    [CREATE_PATTERN_FIELD_NAME.IS_COUNT]: formValues[
      CREATE_PATTERN_FIELD_NAME.IS_COUNT
    ]
      ? formValues[CREATE_PATTERN_FIELD_NAME.COUNT]
      : undefined,
    [CREATE_PATTERN_FIELD_NAME.FILE]:
      formValues[CREATE_PATTERN_FIELD_NAME.TYPE] === 1 &&
      formValues[CREATE_PATTERN_FIELD_NAME.OPTION_TYPE] === 0
        ? pdfFileUrls[0]
        : undefined,
    [CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS]: {
      recommendationProducts:
        formValues[CREATE_PATTERN_FIELD_NAME.RECOMMENDATIONS],
    },
    [CREATE_PATTERN_FIELD_NAME.TYPE]:
      formValues[CREATE_PATTERN_FIELD_NAME.TYPE],
  };
}
export function convertForPreUploadPDFFiles(formValues) {
  if (formValues[CREATE_PATTERN_FIELD_NAME.TYPE === 2]) return [];
  if (formValues[CREATE_PATTERN_FIELD_NAME.OPTION_TYPE] === 0)
    return [formValues[CREATE_PATTERN_FIELD_NAME.FILE]];
  return formValues[CREATE_PATTERN_FIELD_NAME.OPTIONS].map(
    (item) => item[CREATE_PATTERN_FIELD_NAME.OPTION_FILE],
  );
}
