export const BASKET_ROUTE_PATH = '/basket';

export const BASKET_STORE_NAME = 'BASKET';

export const BASKET_API = {
  BASKET_UPLOAD: {
    ENDPOINT: () => 'purchase/user/get',
    TYPE: 'POST',
  },
  BASKET_LOAD_USER_INFO: {
    ENDPOINT: 'user/delivery/info',
    TYPE: 'GET',
  },
  CHECK_PROMO_CODE: {
    ENDPOINT: 'promo-code/check',
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
