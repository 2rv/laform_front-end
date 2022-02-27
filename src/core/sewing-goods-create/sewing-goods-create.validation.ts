import { validate } from 'src/main/validate/validate.core';
import { required, minLength } from 'src/main/validate/validate.service';
import {
  SewingGoodsValues,
  SEWING_GOODS_CREATE_FIELD_NAME,
} from './sewing-goods-create.type';

const config = {
  [SEWING_GOODS_CREATE_FIELD_NAME.NAME]: [required, minLength(3)],
  [SEWING_GOODS_CREATE_FIELD_NAME.DESCRIPTION]: [required],
  [SEWING_GOODS_CREATE_FIELD_NAME.IMAGES]: [],
};

export const sewingGoodsValidate = (values: SewingGoodsValues) =>
  validate(values, config);
