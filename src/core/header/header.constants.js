import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';
import { ARTICLES_ROUTE_PATH } from '../articles';
import { FAQ_ROUTE_PATH } from '../faq';
import { ABOUT_ROUTE_PATH } from '../faq-about';
import { CREATE_MASTER_CLASS_ROUTE_PATH } from '../master-class-create';
import { CREATE_PATTERN_ROUTE_PATH } from '../pattern-create';
import { CREATE_SEWING_GOODS_ROUTE_PATH } from '../sewing-goods-create';
import { CREATE_ARTICLE_ROUTE_PATH } from '../article-create';
import { USERS_ROUTE_PATH } from '../users';
import { ORDERS_ROUTE_PATH } from '../orders';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import { PROMOCODES_ROUTE_PATH } from '../promocodes';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';
import { ALL_LIKES_ROUTE_PATH } from '../likes';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { CREATE_NOTIFICATION_ROUTE_PATH } from '../create-notification';
import { ALL_PRODUCTS_ROUTE_PATH } from '../all-products';
import { STATISTICS_ROUTE_PATH } from '../statistics';
import { RECENT_COMMENTS_ROUTE_PATH } from '../recent-comments';
import { PRODUCT_SELECTIONS_ROUTE_PATH } from '../product-selections';

export const NAV_MENU_ITEMS = [
  { name: 'HEADER.MENU_ITEMS.PATTERNS', path: PATTERNS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.SEWING_GOODS', path: SEWING_GOODS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.MASTER_CLASSES', path: MASTER_CLASSES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ARTICLES', path: ARTICLES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.HELP', path: FAQ_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ABOUT_US', path: ABOUT_ROUTE_PATH },
];

export const USER_MENU_ITEMS = [
  { path: USER_ORDERS_ROUTE_PATH, tid: 'HEADER.USER_MENU.MY_PURCHASES' },
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
    tid: 'HEADER.ADMIN_MENU.PATTERN_CREATING',
    path: CREATE_PATTERN_ROUTE_PATH,
  },
  {
    path: CREATE_SEWING_GOODS_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.SEWING_GOODS_CREATING',
  },
  {
    path: CREATE_ARTICLE_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.ARTICLE_CREATING',
  },
  {
    path: CREATE_NOTIFICATION_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.NOTIFICATION_CREATING',
  },
  { path: USERS_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.USERS_LIST' },
  { path: ORDERS_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.ORDERS_TABLE' },
  {
    path: PRODUCT_SELECTIONS_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.BEST_PRODUCTS',
  },
  { path: SLIDER_LIST_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.SLIDER' },
  { path: PROMOCODES_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.PROMOCODES' },
  { path: ALL_PRODUCTS_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.ALL_PRODUCTS' },
  {
    path: STATISTICS_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.STATISTICS',
  },
  {
    path: RECENT_COMMENTS_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.RECENT_COMMENTS',
  },
];
