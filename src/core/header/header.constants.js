import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';
import { ARTICLES_ROUTE_PATH } from '../articles';
import { FAQ_PAGE_ROUTE_PATH } from '../faq-page';

export const NAV_MENU_ITEMS = [
  { name: 'HEADER.MENU_ITEMS.PATTERNS', path: PATTERNS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.SEWING_GOODS', path: SEWING_GOODS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.MASTER_CLASSES', path: MASTER_CLASSES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ARTICLES', path: ARTICLES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ABOUT', path: FAQ_PAGE_ROUTE_PATH },
];

export const USER_MENU_ITEMS = [
  { path: '/profile', tid: 'HEADER.USER_MENU.PROFILE' },
  { path: '/favorites', tid: 'HEADER.USER_MENU.FAVORITE' },
  {
    path: '/purchases-history',
    tid: 'HEADER.USER_MENU.PURCHASE_HISTORY',
  },
  { path: '/orders-list', tid: 'HEADER.USER_MENU.ORDERS_lIST' },
  { path: '/settings', tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_MENU_ITEMS = [
  { divider: true },
  { path: '/master-class/create', tid: 'HEADER.ADMIN_MENU.MASTER_CLASS_ARTICLE_CREATING' },
  { path: '/patterns/create/print', tid: 'HEADER.ADMIN_MENU.PRINTED_PATTERN_CREATING' },
  { path: '/patterns/create/electronic', tid: 'HEADER.ADMIN_MENU.ELECTRONIC_PATTERNS_CREATING' },
  { path: '/sewing-goods/create', tid: 'HEADER.ADMIN_MENU.SEWING_GOODS_CREATING' },
  { path: '/article/create', tid: 'HEADER.ADMIN_MENU.ARTICLE_CREATING' },
  { path: '/orders', tid: 'HEADER.ADMIN_MENU.ORDERS_TABLE' },
  { path: '/users-order', tid: 'HEADER.ADMIN_MENU.ORDERS_lIST' },
  { path: '/best-products', tid: 'HEADER.ADMIN_MENU.BEST_PRODUCTS' },
  { path: '/slider', tid: 'HEADER.ADMIN_MENU.SLIDER' },
  { path: '/promocodes', tid: 'HEADER.ADMIN_MENU.PROMOCODES' },
];
