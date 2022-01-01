import { PRODUCTS_LIST_TAB_TYPES } from './products-list.type';

export const PRODUCTS_LIST_ROUTE_PATH = ({ type } = { type: '[[...type]]' }) =>
  `/all-products/${type}`;

export const PRODUCTS_LIST_TABS = [
  {
    name: 'ALL_PRODUCTS.TABS.MASTER_CLASS',
    path: PRODUCTS_LIST_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIST_TAB_TYPES[0] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.ELECTRONIC_PATTERN_PRODUCT',
    path: PRODUCTS_LIST_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIST_TAB_TYPES[1] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.PRINTED_PATTERN_PRODUCT',
    path: PRODUCTS_LIST_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIST_TAB_TYPES[2] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.SEWING_PRODUCT',
    path: PRODUCTS_LIST_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIST_TAB_TYPES[3] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.POST',
    path: PRODUCTS_LIST_ROUTE_PATH,
    pathConfig: { params: { type: PRODUCTS_LIST_TAB_TYPES[4] } },
  },
];
