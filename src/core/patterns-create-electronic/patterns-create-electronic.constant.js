export const ELECTRONIC_PATTERN_ROUTE_PATH = '/patterns/create/electronic';
export const ELECTRONIC_PATTERN_STORE_NAME = 'ELECTRONIC_PATTERN';

export const ELECTRONIC_PATTERN_API = {
  ELECTRONIC_PATTERN_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/pattern-product/create',
  },
  ELECTRONIC_PATTERN_IMAGE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
  ELECTRONIC_PATTERN_PDF_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
};
