export const MASTER_CLASSES_ROUTE_PATH = '/master-class';
export const MASTER_CLASSES_STORE_NAME = 'MASTER_CLASSES';
export const MASTER_CLASSES_API = {
  MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: ({ page, currentLang, where, sort, by, category }) =>
      `/master-class/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : ''
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }`,
    TYPE: 'GET',
  },
  MASTER_CLASSES_LOAD_DATA_AUTH: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/master-class/auth/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : ''
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }`,
    TYPE: 'GET',
  },
  MASTER_CLASSES_UPDATE: {
    ENDPOINT: (id) => `/master-class/update/${id}`,
    TYPE: 'PUT',
  },
  MASTER_CLASSES_DELETE: {
    ENDPOINT: (id) => `/master-class/delete/${id}`,
    TYPE: 'DELETE',
  },
  CATEGORIES_UPLOAD_DATA: {
    ENDPOINT: (currentLang, type) => `/category/get?lang=${currentLang}&type=${type}`,
    TYPE: 'GET',
  },
};
