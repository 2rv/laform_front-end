export const MASTER_CLASSES_ROUTE_PATH = '/master-classes';

export const MASTER_CLASSES_STORE_NAME = 'MASTER_CLASSES';

export const MASTER_CLASSES_API = {
  MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `/master-class/get?lang=${currentLang}&size=1&page=1`,
    TYPE: 'GET',
  },
};

export const MASTER_CLASSES_FILTER_CATEGORY_OPTIONS = [
  { id: 1, tid: 'Категория 1' },
  { id: 2, tid: 'Категория 2' },
];

export const MASTER_CLASSES_FILTER_TAGS_OPTIONS = [
  { id: 1, tid: 'Популярные' },
  { id: 2, tid: 'Самые дорогие' },
  { id: 3, tid: 'Самые дешевые' },
];

export const TEST_MASTER_CLASSES_ITEMS = [
  {
    id: 1,
    name: 'Мастер-класс по пошиву мужских брюк 1003',
    favorite: true,
    backgroundImage: '/static/test/popular-gods-1.png',
  },
  {
    id: 2,
    name: 'Инструкция по пошиву Комбинезон 0717',
    favorite: false,
    backgroundImage: '/static/test/popular-gods-2.png',
  },
  {
    id: 3,
    name: 'Мастер-класс по пошиву Жакета 0305',
    favorite: false,
    backgroundImage: '/static/test/popular-gods-3.png',
  },
];
