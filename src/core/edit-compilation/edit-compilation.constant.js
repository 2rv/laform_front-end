export const EDIT_COMPILATION_ROUTE_PATH = '/edit-compilation';

export const EDIT_COMPILATION_STORE_NAME = 'EDIT_COMPILATION';

export const EDIT_COMPILATION_API = {
  BEST_PRODUCTS_LOAD_DATA: {
    ENDPOINT: (currentLang) => `post/best/get?lang=${currentLang}`, // Менять эндпоинт когда BE будет готов
    TYPE: 'GET',
  },
  BEST_MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `master-class/get?lang=${currentLang}&size=1&page=1`,
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
  BEST_COMPILATIONS_UPDATE_ITEM: {
    ENDPOINT: (compilationName, id) => `${compilationName}/update/${id}`,
    TYPE: 'DELETE',
  },
};

export const TEST_EDIT_COMPILATION_ITEMS = {
  bestGoodsItems: [
    {
      id: 1,
      name: 'Баска 0607',
      backgroundImage: '/static/test/popular-gods-1.png',
    },
    {
      id: 2,
      name: 'Шорты 0711',
      backgroundImage: '/static/test/popular-gods-2.png',
    },
    {
      id: 3,
      name: 'Юбка-шорты 0718',
      backgroundImage: '/static/test/popular-gods-3.png',
    },
  ],
  bestMasterClassesItems: [
    {
      id: 1,
      name: 'Баска 0607',
      backgroundImage: '/static/test/popular-gods-1.png',
    },
    {
      id: 2,
      name: 'Шорты 0711',
      backgroundImage: '/static/test/popular-gods-2.png',
    },
    {
      id: 3,
      name: 'Юбка-шорты 0718',
      backgroundImage: '/static/test/popular-gods-3.png',
    },
  ],
  bestArticlesItems: [
    {
      id: 1,
      name: 'Баска 0607',
      backgroundImage: '/static/test/popular-gods-1.png',
    },
    {
      id: 2,
      name: 'Шорты 0711',
      backgroundImage: '/static/test/popular-gods-2.png',
    },
    {
      id: 3,
      name: 'Юбка-шорты 0718',
      backgroundImage: '/static/test/popular-gods-3.png',
    },
  ],
};
