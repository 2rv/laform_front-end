export const SEEWING_GOODS_TABLE_COLUMNS = '2fr 3.5fr 1fr 1fr 0.4fr 0.4fr';
export const PATTERN_TABLE_COLUMNS = '2fr 4.5fr 1fr 0.4fr 0.4fr';
export const MASTER_CLASSES_TABLE_COLUMNS = '2fr 4.5fr 1fr 0.4fr 0.4fr';

export const BASKET_ROUTE_PATH = '/basket';

export const SHIPPING_PRICE = 250;

export const BASKET_STORE_NAME = 'BASKET';

export const BASKET_API = {
  BASKET_UPLOAD: {
    ENDPOINT: () => 'purchase/user/get',
    TYPE: 'POST',
  },
  BASKET_LOAD_USER_INFO: {
    ENDPOINT: 'user/info/get',
    TYPE: 'GET',
  },
  CHECK_PROMO_CODE: {
    ENDPOINT: 'promo-code/check',
    TYPE: 'POST',
  },
  PURCHASE_CREATE: {
    ENDPOINT: 'purchase/user/create',
    TYPE: 'POST',
  },
};
