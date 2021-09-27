export const SEWING_GOODS_PRODUCT_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/sewing-goods/${id}`;
export const SEWING_GOODS_PRODUCT_STORE_NAME = 'SEWING_GOOD_PRODUCT';
export const SEWING_GOODS_PRODUCT_API = {
  SEWING_GOODS_PRODUCT_UPLOAD: {
    ENDPOINT: (currentLang, id) =>
      `/sewing-product/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_PRODUCT_AUTH_UPLOAD: {
    ENDPOINT: (currentLang, id) =>
      `/sewing-product/auth/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
