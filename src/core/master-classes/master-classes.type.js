import { MASTER_CLASSES_FORM_FILTER_FIELD_KEY } from './frames/master-classes-form-filter';

export const MASTER_CLASSES_FILTER_FIELD_NAME = {
  CATEGORY: 'category',
  TAGS: 'tags',
  FIND_MASTER_CLASSES: 'findMasterClasses',
};

export const MASTER_CLASSES_FORM_FILTER_FIELD_NAME = {
  [MASTER_CLASSES_FORM_FILTER_FIELD_KEY.CATEGORY]:
    MASTER_CLASSES_FILTER_FIELD_NAME.CATEGORY,
  [MASTER_CLASSES_FORM_FILTER_FIELD_KEY.TAGS]:
    MASTER_CLASSES_FILTER_FIELD_NAME.TAGS,
  [MASTER_CLASSES_FORM_FILTER_FIELD_KEY.FIND_MASTER_CLASSES]:
    MASTER_CLASSES_FILTER_FIELD_NAME.FIND_MASTER_CLASSES,
};
