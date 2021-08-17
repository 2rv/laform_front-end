export const COMPILATION_ROUTE_PATH = '/compilation';

export const COMPILATION_STORE_NAME = 'COMPILATION';

export const COMPILATION_API = {
  COMPILATION_PRODUCTS_LOAD_DATA: {
    ENDPOINT: (currentLang) => `post/get?lang=${currentLang}`, // Менять эндпоинт когда BE будет готов
    TYPE: 'GET',
  },
  COMPILATION_MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `master-class/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  COMPILATION_ARTICLES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `post/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  REMOVE_COMPILATION: {
    ENDPOINT: (compilationName, id) => `${compilationName}/delete/${id}`,
    TYPE: 'DELETE',
  },
};
