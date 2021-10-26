export const ALL_LIKES_ROUTE_PATH = '/likes';
export const ALL_LIKES_STORE_NAME = 'ALL_LIKES';
export const ALL_LIKES_GUEST_REDIRECT = '';
export const LIKES_API = {
  SEWING_PRODUCT_LIKES_UPLOAD: {
    ENDPOINT: (currentLang, page) => `/sewing-product/liked/get/?lang=${currentLang}${Boolean(page) ? `&page=${page}` : ''}`,
    TYPE: 'GET',
  },
  MASTER_CLASS_LIKES_UPLOAD: {
    ENDPOINT: (currentLang, page) => `/master-class/liked/get/?lang=${currentLang}${Boolean(page) ? `&page=${page}` : ''}`,
    TYPE: 'GET',
  },
  PATTERN_PRODUCT_LIKES_UPLOAD: {
    ENDPOINT: (currentLang, page) =>
      `/pattern-product/liked/get/?lang=${currentLang}${Boolean(page) ? `&page=${page}` : ''}`,
    TYPE: 'GET',
  },
  POST_LIKES_UPLOAD: {
    ENDPOINT: (currentLang, page) => `/post/liked/get/?lang=${currentLang}${Boolean(page) ? `&page=${page}` : ''}`,
    TYPE: 'GET',
  },
};
