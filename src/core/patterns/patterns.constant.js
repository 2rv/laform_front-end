export const PATTERNS_ROUTE_PATH = '/patterns';
export const PATTERNS_STORE_NAME = 'PATTERNS_STORE';
export const PATTERNS_API = {
  PATTERNS_UPLOAD: {
    ENDPOINT: (currentLang, page, where, sort, by, type) =>
      `/pattern-product/get?lang=${currentLang}&page=${page}${
        Boolean(where) ? `&where=${where}` : ''
      }${Boolean(sort) ? `&sort=${sort}` : ''}${
        Boolean(by) ? `&by=${by}` : ''
      }${Boolean(type) ? `&type=${type}` : ''}`,
    TYPE: 'GET',
  },
  PATTERNS_UPLOAD_AUTH: {
    ENDPOINT: (currentLang, page, where, sort, by, type) =>
      `/pattern-product/auth/get?lang=${currentLang}&page=${page}${
        Boolean(where) ? `&where=${where}` : ''
      }${Boolean(sort) ? `&sort=${sort}` : ''}${
        Boolean(by) ? `&by=${by}` : ''
      }${Boolean(type) ? `&type=${type}` : ''}`,
    TYPE: 'GET',
  },
  PATTERNS_UPDATE: {
    ENDPOINT: (id) => `/pattern-product/update/${id}`,
    TYPE: 'PUT',
  },
};
