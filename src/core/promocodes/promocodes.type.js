import { PROMOCODE_FIELD_KEY } from './frames';

export const PROMOCODE_FIELD_NAME = {
  PROMOCODE: 'promocode',
  DISCOUNT: 'discount',
};

export const PROMOCODE_FORM_FIELD_NAME = {
  [PROMOCODE_FIELD_KEY.PROMOCODE]: PROMOCODE_FIELD_NAME.PROMOCODE,
  [PROMOCODE_FIELD_KEY.DISCOUNT]: PROMOCODE_FIELD_NAME.DISCOUNT,
};

export const PROMOCODES_ACTION_TYPE = {
  PROMOCODES_UPLOAD_PENDING:
    'PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_PENDING',
  PROMOCODES_UPLOAD_SUCCESS:
    'PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_SUCCESS',
  PROMOCODES_UPLOAD_ERROR:
    'PROMOCODES_ACTION_TYPE.PROMOCODES_UPLOAD_ERROR',
};
