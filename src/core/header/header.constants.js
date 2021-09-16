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
  { path: '/profile', tid: 'Мой профиль' },
  { path: '/favorites', tid: 'HEADER.USER_MENU.FAVORITE' },
  {
    path: '/purchases-history',
    tid: 'HEADER.USER_MENU.PURCHASE_HISTORY',
  },
  { path: '/orders-list', tid: 'Список заказов' },
  { path: '/settings', tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_MENU_ITEMS = [
  { divider: true },
  { path: '/master-class/create', tid: 'Создание мастер-класса' },
  { path: '/patterns/create/print', tid: 'Создание печатной выкройки' },
  { path: '/patterns/create/electronic', tid: 'Создание электронной выкройки' },
  { path: '/sewing-goods/create', tid: 'Создание товара для шитья' },
  { path: '/article/create', tid: 'Создание статьи' },
  { path: '/orders', tid: 'Таблица заказов' },
  { path: '/users-order', tid: 'Список заказов' },
  { path: '/best-products', tid: 'Лучшие товары' },
  { path: '/slider', tid: 'Слайдер' },
  { path: '/promocodes', tid: 'Промокоды' },
];
