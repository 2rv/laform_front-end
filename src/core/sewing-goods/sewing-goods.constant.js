export const SEWING_GOODS_ROUTE_PATH = '/sewing-goods';
export const SEWING_GOODS_FILTER_CATEGORY_OPTIONS = [
  {
    id: 1,
    tid: 'Категория 1',
  },
  {
    id: 2,
    tid: 'Категория 2',
  },
];
export const SEWING_GOODS_FILTER_TAGS_OPTIONS = [
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
export const TEST_SEWING_GOODS_ITEMS = [
  {
    id: 1,
    name: 'Сарафан 0445',
    complexity: 1,
    selected: true,
    price: {
      min: 500,
      max: null,
    },
    isLiked: true,
    hit: false,
    discount: 230,
    backgroundImage: '/static/test/popular-gods-1.png',
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
    isLiked: false,
    hit: false,
    discount: null,
    backgroundImage: '/static/test/popular-gods-2.png',
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
    isLiked: false,
    hit: true,
    discount: null,
    backgroundImage: '/static/test/popular-gods-3.png',
  },
];
