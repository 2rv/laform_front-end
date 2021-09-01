export const EDIT_COMPILATION_ROUTE_PATH = '/best-products';
export const EDIT_COMPILATION_STORE_NAME = 'EDIT_COMPILATION';

export const EDIT_COMPILATION_API = {
  BEST_PRODUCTS_LOAD_DATA: {
    ENDPOINT: (currentLang) => `sewing-product/pinned/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  BEST_MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `master-class/pinned/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  BEST_ARTICLES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `post/pinned/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  PRODUCTS_LOAD_DATA: {
    ENDPOINT: (compilationName, currentLang) => `${compilationName}/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  UPDATE_PINNED: {
    ENDPOINT: (compilationName, id) => `${compilationName}/update/${id}`,
    TYPE: 'PUT',
  }
};
