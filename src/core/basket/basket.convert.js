import { MASTER_CLASS_PRODUCT_ROUTE_PATH } from '../master-class-product';
import { PATTERNS_PRODUCT_ROUTE_PATH } from '../patterns-product';
import { SEWING_GOODS_PRODUCT_ROUTE_PATH } from '../sewing-goods-product';
import {
  ORDER_DATA_NAME,
  ORDER_FIELD_NAME,
  USER_INFO_DATA_NAME,
} from './basket.type';

export const performDiliveryInfo = (rowData) => {
  return rowData.map((item, index) => ({
    id: item.id,
    tid: item.deliveryType,
    price: item.deliveryTypePrice,
  }));
};

export const performUserInfo = (rowData) => {
  return {
    [ORDER_FIELD_NAME.FULL_NAME]: rowData[USER_INFO_DATA_NAME.FULL_NAME],
    [ORDER_FIELD_NAME.CITY]: rowData[USER_INFO_DATA_NAME.CITY],
    // [ORDER_FIELD_NAME.DELIVERY_METHOD]: rowData[USER_INFO_DATA_NAME.DELIVERY_METHOD],
    // [ORDER_FIELD_NAME.PAYMENT_METHOD]: rowData[USER_INFO_DATA_NAME.PAYMENT_METHOD],
    [ORDER_FIELD_NAME.PHONE]: rowData[USER_INFO_DATA_NAME.PHONE],
  };
};

export const convertPromoCode = (data) => {
  return {
    [ORDER_DATA_NAME.PROMO_CODE]: data,
  };
};
export const convertUserInfo = (data) => {
  return {
    [USER_INFO_DATA_NAME.FULL_NAME]: data[ORDER_FIELD_NAME.FULL_NAME],
    [USER_INFO_DATA_NAME.CITY]: data[ORDER_FIELD_NAME.CITY],
    [USER_INFO_DATA_NAME.PHONE]: data[ORDER_FIELD_NAME.PHONE],
  };
};

export const convertForAuth = (data) => {
  return {
    email: data[ORDER_FIELD_NAME.EMAIL],
    code: data[ORDER_FIELD_NAME.EMAIL_CONFIRM_CODE],
  };
};
