export const PRODUCT_SELECTIONS_STORE_NAME = 'COMPILATION';
export const PRODUCT_SELECTIONS_ROUTE_PATH = '/compilation';

export const PRODUCT_SELECTIONS_API = {
  MASTER_CLASS_LOAD_DATA: {
    ENDPOINT: (currentLang: string = 'ru') =>
      `/master-class/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_LOAD_DATA: {
    ENDPOINT: (currentLang: string = 'ru') =>
      `/sewing-product/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  ARTICLE_LOAD_DATA: {
    ENDPOINT: (currentLang: string = 'ru') => `/post/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PATTERNS_LOAD: {
    ENDPOINT: (currentLang: string = 'ru') =>
      `/pattern-product/get?lang=${currentLang}`,
    TYPE: 'GET',
  },

  COMPILATION_LOAD: {
    ENDPOINT: `/compilation/get`,
    TYPE: 'GET',
  },
  COMPILATION_UPLOAD: {
    ENDPOINT: `/compilation/create`,
    TYPE: 'POST',
  },
  COMPILATION_DELETE: {
    ENDPOINT: (id: string) => `/compilation/delete/${id}`,
    TYPE: 'DELETE',
  },
};
