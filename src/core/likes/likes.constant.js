export const ALL_LIKES_ROUTE_PATH = '/likes/';
export const ALL_LIKES_STORE_NAME = 'ALL_LIKES';
export const ALL_LIKES_GUEST_REDIRECT = '';
export const LIKES_API = {
  SEWING_PRODUCT_LIKES_UPLOAD: {
    ENDPOINT: (currentLang) => `/sewing-product/liked/get/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  MASTER_CLASS_LIKES_UPLOAD: {
    ENDPOINT: (currentLang) => `/master-class/liked/get/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PATTERN_PRODUCT_LIKES_UPLOAD: {
    ENDPOINT: (currentLang) =>
      `/pattern-product/liked/get/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  POST_LIKES_UPLOAD: {
    ENDPOINT: (currentLang) => `/post/liked/get/?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
