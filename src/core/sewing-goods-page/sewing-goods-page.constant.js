export const SEWING_GOODS_PAGE_ROUTE_PATH = '/purchases/sewing-good/';

export const SEWING_GOODS_PAGE_STORE_NAME = 'sewing-goods-page';

export const SEWING_GOODS_PAGE_API = {
  SEWING_GOODS_PAGE_UPLOAD: {
    ENDPOINT: (id) => `/purchase/user/get/${id}`,
    TYPE: 'GET',
  },
};
