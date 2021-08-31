export const SEWING_GOODS_ROUTE_PATH = '/sewing-goods';
export const SEWING_GOODS_STORE_NAME = 'SEWING_GOODS';
export const SEWING_GOODS_API = {
  SEWING_GOODS_UPLOAD: {
    ENDPOINT: (currentLang) => `/sewing-product/get?lang=${currentLang}`, //&page=1&size=1
    TYPE: 'GET',
  },
};
