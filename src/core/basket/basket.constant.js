export const BASKET_ROUTE_PATH = '/basket';

export const BASKET_STORE_NAME = 'BASKET';

export const BASKET_API = {
  CREATE_ORDER: {
    ENDPOINT: (isAuth) => {
      if (isAuth) return 'purchase/create';
      else return 'purchase/not-auth/create';
    },
    TYPE: 'POST',
  },
  GET_DELIVERY_TYPES: {
    ENDPOINT: '/delivery-price/get',
    METHOD: 'GET',
  },
  SEND_EMAIL_CODE: {
    ENDPOINT: '/mail/send/verification-code',
    METHOD: 'POST',
  },
  CONFIRM_EMAIL_FOR_ORDER: {
    ENDPOINT: `/auth/verify/code`,
    METHOD: 'POST',
  },
  LOAD_USER_INFO: {
    ENDPOINT: 'user/info/get',
    TYPE: 'GET',
  },
  UPDATE_USER_INFO: {
    ENDPOINT: '/user/info/update',
    TYPE: 'PATCH',
  },
  CHECK_PROMO_CODE: {
    ENDPOINT: 'promo-code/check',
    TYPE: 'POST',
  },
  PAYMENT_CREATE: {
    ENDPOINT: 'payment',
    TYPE: 'POST',
  },
  ADD_BACKET_LOAD_ITEM_INFO: {
    ENDPOINT: (type, id, currentLang) => {
      if (type === 0) return `/master-class/get/${id}/?lang=${currentLang}`;
      if (type === 1) return `/pattern-product/get/${id}/?lang=${currentLang}`;
      if (type === 2) return `/pattern-product/get/${id}/?lang=${currentLang}`;
      if (type === 3) return `/sewing-product/get/${id}/?lang=${currentLang}`;
    },
    TYPE: 'GET',
  },
};
