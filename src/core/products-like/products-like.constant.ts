import { PRODUCTS_LIKE_TAB_TYPES } from './products-like.type';

export const PRODUCTS_LIKE_ROUTE_PATH = ({ type } = { type: '[[...type]]' }) =>
  `/likes/${type}`;

export const PRODUCTS_LIKE_TABS = [
  {
    name: 'ALL_LIKES.TABS.MASTER_CLASS',
    path: PRODUCTS_LIKE_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIKE_TAB_TYPES[0] } },
  },
  {
    name: 'Электронные выкройки',
    path: PRODUCTS_LIKE_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIKE_TAB_TYPES[1] } },
  },
  {
    name: 'Печаные выкройки',
    path: PRODUCTS_LIKE_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIKE_TAB_TYPES[2] } },
  },
  {
    name: 'ALL_LIKES.TABS.SEWING_PRODUCT',
    path: PRODUCTS_LIKE_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIKE_TAB_TYPES[3] } },
  },
  {
    name: 'ALL_LIKES.TABS.POST',
    path: PRODUCTS_LIKE_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIKE_TAB_TYPES[4] } },
  },
];
