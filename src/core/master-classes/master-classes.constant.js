export const MASTER_CLASSES_ROUTE_PATH = '/master-class';
export const MASTER_CLASSES_STORE_NAME = 'MASTER_CLASSES';
export const MASTER_CLASSES_API = {
  MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: ({ page, currentLang, where, sort, by }) =>
      `/master-class/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : ''
      }${Boolean(by) ? `&by=${by}` : ''}`,
    TYPE: 'GET',
  },
  MASTER_CLASSES_LOAD_DATA_AUTH: {
    ENDPOINT: ({ currentLang, page, where, sort, by }) =>
      `/master-class/auth/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : ''
      }${Boolean(by) ? `&by=${by}` : ''}`,
    TYPE: 'GET',
  },
  MASTER_CLASSES_UPDATE: {
    ENDPOINT: (id) => `/master-class/update/${id}`,
    TYPE: 'PUT',
  },
};
