export const PATTERNS_ROUTE_PATH = `/patterns/`;
export const PATTERNS_STORE_NAME = 'PATTERNS_STORE';
export const PATTERNS_API = {
  PATTERNS_UPLOAD: {
    ENDPOINT: ({ currentLang, page, where, sort, by, type, category }) =>
      `/pattern-product/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : '&sort=date'
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(type) ? `&type=${type}` : ''
      }${Boolean(category) ? `&category=${category}` : ''}`,

    TYPE: 'GET',
  },
  PATTERNS_UPLOAD_AUTH: {
    ENDPOINT: ({ currentLang, page, where, sort, by, type, category }) =>
      `/pattern-product/auth/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : '&sort=date'
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(type) ? `&type=${type}` : ''
      }${Boolean(category) ? `&category=${category}` : ''}`,
    TYPE: 'GET',
  },
  PATTERNS_UPDATE: {
    ENDPOINT: (id) => `/pattern-product/update/${id}`,
    TYPE: 'PUT',
  },
  PATTERNS_DELETE: {
    ENDPOINT: (id) => `/pattern-product/delete/${id}`,
    TYPE: 'DELETE',
  },
  CATEGORIES_UPLOAD_DATA: {
    ENDPOINT: (currentLang, type) =>
      `/category/get?lang=${currentLang}&type=${type}`,
    TYPE: 'GET',
  },
};
