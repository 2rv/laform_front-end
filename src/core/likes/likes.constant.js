export const ALL_LIKES_ROUTE_PATH = ({ type } = { type: '[[...type]]' }) =>
  `/likes/${type}`;

export const ALL_LIKES_STORE_NAME = 'ALL_LIKES';
export const LIKES_API = {
  GET_MASTER_PROUCTS: {
    ENDPOINT: '/master-class/liked/get',
    TYPE: 'GET',
  },
  GET_PATTERNS_PRODUCTS: {
    ENDPOINT: '/pattern-product/liked/get',
    TYPE: 'GET',
  },
  GET_SEWING_PRODUCTS: {
    ENDPOINT: '/sewing-product/liked/get',
    TYPE: 'GET',
  },
  GET_POST: {
    ENDPOINT: '/post/liked/get',
    TYPE: 'GET',
  },
  GET_CATEGORIES: {
    ENDPOINT: '/category/get',
    TYPE: 'GET',
  },
};

export const ALL_LIKES_TAB_TYPES = {
  0: 'master-class',
  1: 'pattern-electronic',
  2: 'pattern-print',
  3: 'sewing-good',
  4: 'blog',
};

export const ALL_LIKES_TABS = [
  {
    name: 'ALL_LIKES.TABS.MASTER_CLASS',
    path: ALL_LIKES_ROUTE_PATH,
    pathConfig: { params: { type: ALL_LIKES_TAB_TYPES[0] } },
  },
  {
    name: 'Электронные выкройки',
    path: ALL_LIKES_ROUTE_PATH,
    pathConfig: { params: { type: ALL_LIKES_TAB_TYPES[1] } },
  },
  {
    name: 'Печаные выкройки',
    path: ALL_LIKES_ROUTE_PATH,
    pathConfig: { params: { type: ALL_LIKES_TAB_TYPES[2] } },
  },
  {
    name: 'ALL_LIKES.TABS.SEWING_PRODUCT',
    path: ALL_LIKES_ROUTE_PATH,
    pathConfig: { params: { type: ALL_LIKES_TAB_TYPES[3] } },
  },
  {
    name: 'ALL_LIKES.TABS.POST',
    path: ALL_LIKES_ROUTE_PATH,
    pathConfig: { params: { type: ALL_LIKES_TAB_TYPES[4] } },
  },
];
