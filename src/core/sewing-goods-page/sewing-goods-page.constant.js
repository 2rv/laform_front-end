export const SEWING_GOODS_PAGE_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/purchases/sewing-good/${id}`;
export const SEWING_GOODS_PAGE_STORE_NAME = 'sewing-goods-page';

export const SEWING_GOODS_PAGE_API = {
  SEWING_GOODS_PAGE_UPLOAD: {
    ENDPOINT: (id) => `/purchase/user/get/${id}`,
    TYPE: 'GET',
  },
};
