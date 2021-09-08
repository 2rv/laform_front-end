import { CREATE_MASTER_CLASS_FIELD_NAME } from './master-class-create.type';

export function convertForUpload(imageUrls, formValues) {
  return {
    [CREATE_MASTER_CLASS_FIELD_NAME.IMAGES]: imageUrls,
    [CREATE_MASTER_CLASS_FIELD_NAME.NAME]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.NAME],
    [CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.MODIFIER],
    [CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES]: formValues[
      CREATE_MASTER_CLASS_FIELD_NAME.CATEGORIES
    ].map((item) => ({
      [CREATE_MASTER_CLASS_FIELD_NAME.CATEGORY]: item,
    })),
    [CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.DESCRIPTION],
    [CREATE_MASTER_CLASS_FIELD_NAME.MASTER_CLASS]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.MASTER_CLASS],
    [CREATE_MASTER_CLASS_FIELD_NAME.PROGRAMS]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.PROGRAMS],
    [CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.DISCOUNT],
    [CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS]:
      formValues[CREATE_MASTER_CLASS_FIELD_NAME.RECOMMENDATIONS],
    [CREATE_MASTER_CLASS_FIELD_NAME.TYPE]: 0,
  };
}
