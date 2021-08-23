import { PROMOCODE_FIELD_NAME } from './promocodes.type';

export const convertPromocodeFormData = (data) => ({
  text: data[PROMOCODE_FIELD_NAME.PROMOCODE],
  discount: data[PROMOCODE_FIELD_NAME.DISCOUNT],
});

export const convertPromocodesData = (rawData) => ({
  id: rawData.id,
  promocode: rawData.text,
  discount: rawData.discount,
  createdDate: rawData.createdDate,
});
