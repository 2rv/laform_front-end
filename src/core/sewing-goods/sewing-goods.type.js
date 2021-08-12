import { SEWING_GOODS_FORM_FILTER_FIELD_KEY } from './frames';

export const SEWING_GOODS_FILTER_FIELD_NAME = {
  CATEGORY: 'category',
  TAGS: 'tags',
  FIND_SEWING_GODS: 'findSewingGoods',
};

export const SEWING_GOODS_FORM_FILTER_FIELD_NAME = {
  [SEWING_GOODS_FORM_FILTER_FIELD_KEY.CATEGORY]:
    SEWING_GOODS_FILTER_FIELD_NAME.CATEGORY,
  [SEWING_GOODS_FORM_FILTER_FIELD_KEY.TAGS]:
    SEWING_GOODS_FILTER_FIELD_NAME.TAGS,
  [SEWING_GOODS_FORM_FILTER_FIELD_KEY.FIND_SEWING_GODS]:
    SEWING_GOODS_FILTER_FIELD_NAME.FIND_SEWING_GODS,
};

export const SEWING_GOODS_ACTION_TYPE = {
  SEWING_GOODS_UPLOAD_PENDING: 'SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_PENDING',
  SEWING_GOODS_UPLOAD_SUCCESS: 'SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_SUCCESS',
  SEWING_GOODS_UPLOAD_ERROR: 'SEWING_GOODS_ACTION_TYPE.SEWING_GOODS_UPLOAD_ERROR',
};
