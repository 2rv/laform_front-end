export const PATTERNS_ROUTE_PATH = '/patterns';
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
export const TEST_PATTERNS_ITEMS = [
  {
    id: 1,
    name: 'Сарафан 0445',
    complexity: 1,
    selected: true,
    price: {
      min: 500,
      max: null,
    },
    favorite: true,
    hit: false,
    discount: 230,
    backgroundImage: '/static/image/popular-gods-1.png',
  },
  {
    id: 2,
    name: ' Батист Макс Мара Горохи',
    complexity: 3,
    selected: false,
    price: {
      min: 200,
      max: 4150,
    },
    favorite: false,
    hit: false,
    discount: null,
    backgroundImage: '/static/image/popular-gods-2.png',
  },
  {
    id: 3,
    name: 'Батист',
    complexity: 3,
    selected: false,
    price: {
      min: 200,
      max: 900,
    },
    favorite: false,
    hit: true,
    discount: null,
    backgroundImage: '/static/image/popular-gods-3.png',
  },
  {
    id: 4,
    name: 'Хрень 1',
    complexity: 4,
    selected: false,
    price: {
      min: 500,
      max: null,
    },
    favorite: true,
    hit: false,
    discount: null,
    backgroundImage: '/static/image/popular-gods-1.png',
  },
  {
    id: 5,
    name: 'Хрень 2',
    complexity: 5,
    selected: false,
    price: {
      min: 1005,
      max: 2000,
    },
    favorite: false,
    hit: true,
    discount: 900,
    backgroundImage: '/static/image/popular-gods-2.png',
  },
];
export const PATTERNS_SUB_MENU_ITEMS = [
  { name: 'PATTERNS.PATTERNS.MENU.ALL', path: '/patterns' },
  { name: 'PATTERNS.PATTERNS.MENU.PRINTED', path: '/patterns' },
  { name: 'PATTERNS.PATTERNS.MENU.ELECTRONIC', path: '/patterns' },
];
