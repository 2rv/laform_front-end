import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';
import { POSTS_ROUTE_PATH } from '../posts';
import { FAQ_ABOUT_US_ROUTE_PATH, FAQ_ROUTE_PATH } from '../faq-article';
import { MASTER_CLASS_CREATE_ROUTE_PATH } from '../master-class-create';
import { PATTERN_CREATE_ROUTE_PATH } from '../pattern-create';
import { SEWING_GOODS_CREATE_ROUTE_PATH } from '../sewing-goods-create';
import { POST_CREATE_ROUTE_PATH } from '../post-create';
import { USERS_ROUTE_PATH } from '../users';
import { ORDERS_ROUTE_PATH } from '../orders';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import { PROMOCODES_ROUTE_PATH } from '../promocodes';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';
import { ALL_LIKES_ROUTE_PATH } from '../likes';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { CREATE_NOTIFICATION_ROUTE_PATH } from '../create-notification';
import { PRODUCTS_LIST_ROUTE_PATH } from '../products-list';
import { STATISTICS_ROUTE_PATH } from '../statistics';
import { RECENT_COMMENTS_ROUTE_PATH } from '../recent-comments';
import { PRODUCTS_COMPILATION_ROUTE_PATH } from '../products-compilation';

export const NAV_MENU_ITEMS = [
  { name: 'HEADER.MENU_ITEMS.PATTERNS', path: PATTERNS_ROUTE_PATH() },
  { name: 'HEADER.MENU_ITEMS.SEWING_GOODS', path: SEWING_GOODS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.MASTER_CLASSES', path: MASTER_CLASSES_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ARTICLES', path: POSTS_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.HELP', path: FAQ_ROUTE_PATH },
  { name: 'HEADER.MENU_ITEMS.ABOUT_US', path: FAQ_ABOUT_US_ROUTE_PATH },
];

export const USER_MENU_ITEMS = [
  { path: USER_ORDERS_ROUTE_PATH, tid: 'HEADER.USER_MENU.MY_PURCHASES' },
  { path: ALL_LIKES_ROUTE_PATH(), tid: 'HEADER.USER_MENU.FAVORITE' },
  { path: SETTINGS_ROUTE_PATH, tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_MENU_ITEMS = [
  { divider: true },
  {
    path: MASTER_CLASS_CREATE_ROUTE_PATH(),
    tid: 'HEADER.ADMIN_MENU.MASTER_CLASS_ARTICLE_CREATING',
  },
  {
    tid: 'HEADER.ADMIN_MENU.PATTERN_CREATING',
    path: PATTERN_CREATE_ROUTE_PATH(),
  },
  {
    path: SEWING_GOODS_CREATE_ROUTE_PATH(),
    tid: 'HEADER.ADMIN_MENU.SEWING_GOODS_CREATING',
  },
  {
    path: POST_CREATE_ROUTE_PATH(),
    tid: 'HEADER.ADMIN_MENU.ARTICLE_CREATING',
  },
  {
    path: CREATE_NOTIFICATION_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.NOTIFICATION_CREATING',
  },
  { path: USERS_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.USERS_LIST' },
  { path: ORDERS_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.ORDERS_TABLE' },
  {
    path: PRODUCTS_COMPILATION_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.BEST_PRODUCTS',
  },
  { path: SLIDER_LIST_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.SLIDER' },
  { path: PROMOCODES_ROUTE_PATH, tid: 'HEADER.ADMIN_MENU.PROMOCODES' },
  { path: PRODUCTS_LIST_ROUTE_PATH(), tid: 'HEADER.ADMIN_MENU.ALL_PRODUCTS' },
  {
    path: STATISTICS_ROUTE_PATH(),
    tid: 'HEADER.ADMIN_MENU.STATISTICS',
  },
  {
    path: RECENT_COMMENTS_ROUTE_PATH,
    tid: 'HEADER.ADMIN_MENU.RECENT_COMMENTS',
  },
];
