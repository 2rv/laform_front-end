export const PROMOCODES_ROUTE_PATH = '/promocodes';

export const PROMOCODES_STORE_NAME = 'PROMOCODES';

export const PROMOCODES_API = {
  PROMOCODES_LOAD_DATA: {
    ENDPOINT: 'promo-code/get',
    TYPE: 'GET',
  },
  PROMOCODES_UPLOAD_DATA: {
    ENDPOINT: 'promo-code/create',
    TYPE: 'POST',
  },
  PROMOCODE_REMOVE_DATA: {
    ENDPOINT: '/promo-code/delete',
    TYPE: 'DELETE',
  },
};
