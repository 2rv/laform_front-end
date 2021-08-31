export const MY_LIKES_ROUTE_PATH = '/favorites';

export const MY_LIKES_STORE_NAME = 'MY_LIKES';

export const MY_LIKES_API = {
  MY_LIKES_UPLOAD: {
    ENDPOINT: '/',
    TYPE: 'POST',
  },
};

export const TEST_MY_LIKES_ITEMS = [
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
    name: 'Батист',
    complexity: 3,
    selected: false,
    price: {
      min: 200,
      max: 900,
    },
    isLiked: true,
    hit: true,
    discount: null,
    backgroundImage: '/static/test/popular-gods-3.png',
  },
  {
    id: 3,
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
];
export const MY_LIKES_SUB_MENU_ITEMS = [
  { name: 'MY_LIKES.MY_LIKES.MENU.SEWING_GOODDS', path: '/my-likes' },
  { name: 'MY_LIKES.MY_LIKES.MENU.MASTER_CLASSES', path: '/my-likes' },
  { name: 'MY_LIKES.MY_LIKES.MENU.PATTERNS', path: '/my-likes' },
];
