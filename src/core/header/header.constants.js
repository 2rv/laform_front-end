import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';
import { ARTICLES_ROUTE_PATH } from '../articles';
import { FAQ_PAGE_ROUTE_PATH } from '../faq-page';
import { ABOUT_ROUTE_PATH } from '../about';
import { CREATE_MASTER_CLASS_ROUTE_PATH } from '../master-class-create';
import { CREATE_PRINT_PATTERN_ROUTE_PATH } from '../patterns-create-print';
import { ELECTRONIC_PATTERN_ROUTE_PATH } from '../patterns-create-electronic';
import { CREATE_SEWING_GOODS_ROUTE_PATH } from '../sewing-goods-create';
import { CREATE_ARTICLE_ROUTE_PATH } from '../article-create';
import { USERS_ROUTE_PATH } from '../users';
import { ORDERS_ROUTE_PATH } from '../orders';
import { EDIT_COMPILATION_ROUTE_PATH } from '../edit-compilation';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import { PROMOCODES_ROUTE_PATH } from '../promocodes';
import { PURCHASE_PRODUCTS_ROUTE_PATH } from '../purchase-products';
import { ALL_LIKES_ROUTE_PATH } from '../likes';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { DELIVERY_PRICE_PAGE_ROUTE_PATH } from '../delivery-price-page';

export const NAV_MENU_ITEMS = [
  { name: 'HEADER.MENU_ITEMS.PATTERNS', path: PATTERNS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.SEWING_GOODS', path: SEWING_GOODS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.MASTER_CLASSES', path: MASTER_CLASSES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ARTICLES', path: ARTICLES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.HELP', path: FAQ_PAGE_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ABOUT_US', path: ABOUT_ROUTE_PATH },
];

export const USER_MENU_ITEMS = [
  { path: PURCHASE_PRODUCTS_ROUTE_PATH, tid: 'HEADER.USER_MENU.MY_PURCHASES' },
  { path: ALL_LIKES_ROUTE_PATH, tid: 'HEADER.USER_MENU.FAVORITE' },
  { path: SETTINGS_ROUTE_PATH, tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_MENU_ITEMS = [
  { divider: true },
  {
    path: CREATE_MASTER_CLASS_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.MASTER_CLASS_ARTICLE_CREATING',
  },
  {
    path: CREATE_PRINT_PATTERN_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.PRINTED_PATTERN_CREATING',
  },
  {
    path: ELECTRONIC_PATTERN_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.ELECTRONIC_PATTERNS_CREATING',
  },
  {
    path: CREATE_SEWING_GOODS_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.SEWING_GOODS_CREATING',
  },
  {
    path: CREATE_ARTICLE_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.ARTICLE_CREATING',
  },
  { path: USERS_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.USERS_LIST' },
  { path: ORDERS_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.ORDERS_TABLE' },
  { path: EDIT_COMPILATION_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.BEST_PRODUCTS' },
  { path: SLIDER_LIST_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.SLIDER' },
  { path: PROMOCODES_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.PROMOCODES' },
  { path: DELIVERY_PRICE_PAGE_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.CREATE_DELIVERY_TYPE' },
];
