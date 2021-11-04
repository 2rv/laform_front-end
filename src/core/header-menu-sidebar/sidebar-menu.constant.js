import { CREATE_ARTICLE_ROUTE_PATH } from '../article-create';
import { ARTICLES_ROUTE_PATH } from '../articles';
import { EDIT_COMPILATION_ROUTE_PATH } from '../edit-compilation';
import { FAQ_ROUTE_PATH } from '../faq';
import { HOME_ROUTE_PATH } from '../home';
import { ALL_LIKES_ROUTE_PATH } from '../likes';
import { CREATE_MASTER_CLASS_ROUTE_PATH } from '../master-class-create';
import { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
import { ORDERS_ROUTE_PATH } from '../orders';
import { PATTERNS_ROUTE_PATH } from '../patterns';
import { CREATE_PATTERN_ROUTE_PATH } from '../pattern-create';
import { PROMOCODES_ROUTE_PATH } from '../promocodes';
import { SETTINGS_ROUTE_PATH } from '../settings';
import { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';
import { CREATE_SEWING_GOODS_ROUTE_PATH } from '../sewing-goods-create';
import { SLIDER_LIST_ROUTE_PATH } from '../slider-list';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';
import { STATISTICS_ROUTE_PATH } from '../statistics';
import { CREATE_NOTIFICATION_ROUTE_PATH } from '../create-notification';
import { USERS_ROUTE_PATH } from '../users';
import { DELIVERY_PRICE_PAGE_ROUTE_PATH } from '../delivery-price-page';
import { ALL_PRODUCTS_ROUTE_PATH } from '../all-products';

export const NAVIGATION_MENU = (isAuth = false) => {
  const userLinks = [
    { title: 'Домашняя', pathname: HOME_ROUTE_PATH },
    { title: 'Помощь', pathname: FAQ_ROUTE_PATH },
    { title: 'Настройки', pathname: SETTINGS_ROUTE_PATH },
    { title: 'Мои лайки', pathname: ALL_LIKES_ROUTE_PATH },
    { title: 'Мои покупки', pathname: USER_ORDERS_ROUTE_PATH },
    { title: 'Товары для шитья', pathname: SEWING_GOODS_ROUTE_PATH },
    { title: 'Выкройки', pathname: PATTERNS_ROUTE_PATH },
    { title: 'Мастер-классы', pathname: MASTER_CLASSES_ROUTE_PATH },
    { title: 'Блог', pathname: ARTICLES_ROUTE_PATH },
  ];
  const adminLinks = [
    {
      title: 'Админка',
      items: [
        {
          pathname: CREATE_MASTER_CLASS_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.MASTER_CLASS_ARTICLE_CREATING',
        },
        {
          pathname: CREATE_PATTERN_ROUTE_PATH,
          title: 'Создать выкройку',
        },
        {
          pathname: CREATE_SEWING_GOODS_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.SEWING_GOODS_CREATING',
        },
        {
          pathname: CREATE_ARTICLE_ROUTE_PATH,
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
          pathname: EDIT_COMPILATION_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.BEST_PRODUCTS',
        },
        { pathname: SLIDER_LIST_ROUTE_PATH, title: 'HEADER.ADMIN_MENU.SLIDER' },
        {
          pathname: PROMOCODES_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.PROMOCODES',
        },
        {
          pathname: DELIVERY_PRICE_PAGE_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.CREATE_DELIVERY_TYPE',
        },
        {
          pathname: ALL_PRODUCTS_ROUTE_PATH,
          title: 'HEADER.ADMIN_MENU.ALL_PRODUCTS',
        },
        {
          pathname: STATISTICS_ROUTE_PATH,
          title: 'Статистика',
        },
      ],
    },
  ];
  if (isAuth) {
    return userLinks.concat(adminLinks);
  }
  return userLinks;
};

// const test = [
//   {
//     title: 'Название',
//     items: [
//       { title: 'Под название', pathname: 'путь обязателен' },
//       {
//         title: 'Под под название',
//         pathname: 'путь обязателен',
//       },
//       {
//         title: 'Под под название',
//         items: [{ tid: 'Под под под название', pathname: 'путь обязателен' }],
//       },
//     ],
//   },
// ];
