export const CREATE_PRINT_PATTERN_ROUTE_PATH = 'patterns/create/print';
export const CREATE_PRINT_PATTERN_STORE_NAME = 'CREATE_PRINT_PATTERN';
export const CREATE_PRINT_PATTERN_API = {
  PRINT_PATTERN_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/pattern-product/create',
  },
  PRINT_PATTERN_IMAGE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
};
