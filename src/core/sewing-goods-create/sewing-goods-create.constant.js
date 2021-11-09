export const CREATE_SEWING_GOODS_ROUTE_PATH = '/sewing-goods/create';

export const CREATE_SEWING_GOODS_DYNAMIC_ROUTE_PATH = (
  { id } = { id: '[id]' },
) => `/sewing-goods/create/${id}`;

export const CREATE_SEWING_GOODS_STORE_NAME = 'CREATE_SEWING_GOODS';
export const CREATE_SEWING_GOODS_API = {
  SEWING_GOODS_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/sewing-product/create',
  },
  SEWING_GOODS_IMAGE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
  SEWING_GOODS_LOAD: {
    ENDPOINT: (id) => `/sewing-product/get/for-update/${id}/?lang=ru`,
    TYPE: 'GET',
  },
  SEWING_GOODS_CHANGE: {
    ENDPOINT: (id) => `/sewing-product/update/${id}/?lang=ru`,
    TYPE: 'PUT',
  },
  SEWING_GOODS_DELETE: {
    ENDPOINT: (id) => `/sewing-product/delete/${id}`,
    TYPE: 'DELETE',
  },
};
