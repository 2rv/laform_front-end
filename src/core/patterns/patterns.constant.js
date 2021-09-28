export const PATTERNS_ROUTE_PATH = '/patterns/';
export const PATTERNS_STORE_NAME = 'PATTERNS_STORE';
export const PATTERNS_API = {
  PATTERNS_UPLOAD: {
    ENDPOINT: (currentLang) => `/pattern-product/get?lang=${currentLang}`, //&page=1&size=1
    TYPE: 'GET',
  },
  PATTERNS_UPLOAD_AUTH: {
    ENDPOINT: (currentLang) => `/pattern-product/auth/get?lang=${currentLang}`, //&page=1&size=1
    TYPE: 'GET',
  },
  PATTERNS_UPDATE: {
    ENDPOINT: (id) => `/pattern-product/update/${id}`,
    TYPE: 'PUT',
  },
};
