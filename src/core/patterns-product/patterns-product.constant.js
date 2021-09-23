export const PATTERNS_PRODUCT_ROUTE_PATH = '/pattern/[id]';

export const PATTERNS_PRODUCT_STORE_NAME = 'patterns-product';

export const PATTERNS_PRODUCT_API = {
  PATTERNS_PRODUCT_UPLOAD: {
    ENDPOINT: (currentLang, id) =>
      `/pattern-product/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
