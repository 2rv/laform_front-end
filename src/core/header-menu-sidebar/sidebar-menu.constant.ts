import { POST_CREATE_ROUTE_PATH } from '../post-create';
import { POSTS_ROUTE_PATH } from '../posts';
import { FAQ_ROUTE_PATH } from '../faq-article';
import { HOME_ROUTE_PATH } from '../home';
import { PRODUCTS_LIKE_ROUTE_PATH } from '../products-like';
import { MASTER_CLASS_CREATE_ROUTE_PATH } from '../master-class-create';
import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { ORDERS_ROUTE_PATH } from '../orders';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { PATTERN_CREATE_ROUTE_PATH } from '../pattern-create';
import { PROMOCODES_ROUTE_PATH } from '../promocodes';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';
import { SEWING_GOODS_CREATE_ROUTE_PATH } from '../sewing-goods-create';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';
import { STATISTICS_ROUTE_PATH } from '../statistics';
import { CREATE_NOTIFICATION_ROUTE_PATH } from '../create-notification';
import { USERS_ROUTE_PATH } from '../users';
import { PRODUCTS_LIST_ROUTE_PATH } from '../products-list';
import { PRODUCTS_COMPILATION_ROUTE_PATH } from '../products-compilation';

export const NAVIGATION_MENU = (isAuth = false) => {
  const userLinks = [
    { title: 'HEADER.USER_MENU.HOME', pathname: HOME_ROUTE_PATH },
    { title: 'HEADER.USER_MENU.HELP', pathname: FAQ_ROUTE_PATH },
    { title: 'HEADER.USER_MENU.SETTINGS', pathname: SETTINGS_ROUTE_PATH },
    {
      title: 'HEADER.USER_MENU.FAVORITE',
      pathname: PRODUCTS_LIKE_ROUTE_PATH(),
    },
    {
      title: 'HEADER.USER_MENU.MY_PURCHASES',
      pathname: USER_ORDERS_ROUTE_PATH,
    },
    {
      title: 'HEADER.MENU_ITEMS.SEWING_GOODS',
      pathname: SEWING_GOODS_ROUTE_PATH,
    },
    { title: 'HEADER.MENU_ITEMS.PATTERNS', pathname: PATTERNS_ROUTE_PATH() },
    {
      title: 'HEADER.MENU_ITEMS.MASTER_CLASSES',
      pathname: MASTER_CLASSES_ROUTE_PATH,
    },
    { title: 'HEADER.MENU_ITEMS.ARTICLES', pathname: POSTS_ROUTE_PATH },
  ];
  const adminLinks: any = [
    {
      title: 'HEADER.ADMIN_MENU.TITLE',
      items: [
        {
          pathname: MASTER_CLASS_CREATE_ROUTE_PATH(),
          title: 'HEADER.ADMIN_MENU.MASTER_CLASS_ARTICLE_CREATING',
        },
        {
          pathname: PATTERN_CREATE_ROUTE_PATH(),
          title: 'HEADER.ADMIN_MENU.PATTERN_CREATING',
        },
        {
          pathname: SEWING_GOODS_CREATE_ROUTE_PATH(),
          title: 'HEADER.ADMIN_MENU.SEWING_GOODS_CREATING',
        },
        {
          pathname: POST_CREATE_ROUTE_PATH(),
          title: 'HEADER.ADMIN_MENU.ARTICLE_CREATING',
        },
        {
          pathname: CREATE_NOTIFICATION_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.NOTIFICATION_CREATING',
        },
        { pathname: USERS_ROUTE_PATH, title: 'HEADER.ADMIN_MENU.USERS_LIST' },
        {
          pathname: ORDERS_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.ORDERS_TABLE',
        },
        {
          pathname: PRODUCTS_COMPILATION_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.BEST_PRODUCTS',
        },
        { pathname: SLIDER_LIST_ROUTE_PATH, title: 'HEADER.ADMIN_MENU.SLIDER' },
        {
          pathname: PROMOCODES_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.PROMOCODES',
        },
        {
          pathname: PRODUCTS_LIST_ROUTE_PATH(),
          title: 'HEADER.ADMIN_MENU.ALL_PRODUCTS',
        },
        {
          pathname: STATISTICS_ROUTE_PATH(),
          title: 'HEADER.ADMIN_MENU.STATISTICS',
        },
      ],
    },
  ];
  if (isAuth) return userLinks.concat(adminLinks);
  return userLinks;
};
