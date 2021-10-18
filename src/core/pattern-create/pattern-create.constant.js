export const CREATE_PATTERN_ROUTE_PATH = '/patterns/create';
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
};