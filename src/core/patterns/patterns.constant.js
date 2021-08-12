export const PATTERNS_ROUTE_PATH = '/patterns';

export const PATTERNS_STORE_NAME = 'PATTERNS';

export const PATTERNS_API = {
  PATTERNS_UPLOAD: {
    ENDPOINT: '/',
    TYPE: 'POST',
  },
};

export const PATTERNS_FILTER_CATEGORY_OPTIONS = [
  {
    id: 1,
    tid: 'Категория 1',
  },
  {
    id: 2,
    tid: 'Категория 2',
  },
];

export const PATTERNS_FILTER_TAGS_OPTIONS = [
  {
    id: 1,
    tid: 'Популярные',
  },
  {
    id: 2,
    tid: 'Самые дорогие',
  },
  {
    id: 3,
    tid: 'Самые дешевые',
  },
];

export const PATTERNS_SUB_MENU_ITEMS = [
  { name: 'PATTERNS.PATTERNS.MENU.ALL', path: '/patterns' },
  { name: 'PATTERNS.PATTERNS.MENU.PRINTED', path: '/patterns' },
  { name: 'PATTERNS.PATTERNS.MENU.ELECTRONIC', path: '/patterns' },
];
