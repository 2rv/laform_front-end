export const EDIT_COMPILATION_ROUTE_PATH = '/edit-compilation';
export const EDIT_COMPILATION_STORE_NAME = 'EDIT_COMPILATION';

export const EDIT_COMPILATION_API = {
  BEST_PRODUCTS_LOAD_DATA: {
    ENDPOINT: (currentLang) => `post/best/get?lang=${currentLang}`, // Менять эндпоинт когда BE будет готов
    TYPE: 'GET',
  },
  BEST_MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `master-class/get?lang=${currentLang}&size=3`,
    TYPE: 'GET',
  },
  BEST_ARTICLES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `post/best/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  BEST_COMPILATIONS_REMOVE_ITEM: {
    ENDPOINT: (compilationName, id) => `${compilationName}/delete/${id}`,
    TYPE: 'DELETE',
  },
  BEST_MASTER_CLASS_UPDATE_ITEM: {
    ENDPOINT: (compilationNamе, id) => `${compilationNamе}/update/${id}`,
    TYPE: 'PUT',
  },
};
