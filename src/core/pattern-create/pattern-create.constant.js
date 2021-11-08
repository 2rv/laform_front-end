export const CREATE_PATTERN_ROUTE_PATH = '/patterns/create';

export const CREATE_PATTERN_DYNAMIC_ROUTE_PATH = ({ id } = { id: '[id]' }) =>
  `/patterns/create/${id}`;

export const CREATE_PATTERN_STORE_NAME = 'CREATE_PATTERN';
export const CREATE_PATTERN_API = {
  PATTERN_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/pattern-product/create',
  },
  PATTERN_IMAGE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
  PATTERN_PDF_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
  PATTERN_LOAD: {
    ENDPOINT: (id) => `/pattern-product/get/for-update/${id}/?lang=ru`,
    TYPE: 'GET',
  },
  PATTERN_CHANGE: {
    ENDPOINT: (id) => `/pattern-product/update/${id}/?lang=ru`,
    TYPE: 'PUT',
  },
  PATTERN_DELETE: {
    ENDPOINT: (id) => `/pattern-product/delete/${id}`,
    TYPE: 'DELETE',
  },
};
