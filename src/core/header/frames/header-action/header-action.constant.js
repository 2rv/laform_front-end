export const USER_MODAL_ITEMS = [
  { id: 1, path: '/profile', tid: 'Мой профиль' },
  { id: 2, path: '/favorites', tid: 'HEADER.USER_MENU.FAVORITE' },
  {
    id: 3,
    path: '/purchases-history',
    tid: 'HEADER.USER_MENU.PURCHASE_HISTORY',
  },
  { id: 4, path: '/orders-list', tid: 'Список заказов' },
  { id: 5, path: '/settings', tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_USER_MODAL_ITEMS = [
  ...USER_MODAL_ITEMS,
  { id: 6, divider: true },
  { id: 7, path: '/create-product', tid: 'Создание продукта' },
  { id: 8, path: '/master-class/create', tid: 'Создание мастер-класса' },
  { id: 9, path: '/patterns/create/print', tid: 'Создание печатной выкройки' },
  {
    id: 10,
    path: '/patterns/create/electronic',
    tid: 'Создание электронной выкройки',
  },
  {
    id: 11,
    path: '/sewing-goods/create',
    tid: 'Создание товара для шитья',
  },
  {
    id: 12,
    path: '/article/create',
    tid: 'Создание статьи',
  },
  { id: 13, path: '/orders', tid: 'Таблица заказов' },
  { id: 14, path: '/best-products', tid: 'Лучшие товары' },
  { id: 15, path: '/slider', tid: 'Слайдер' },
  { id: 16, path: '/promocodes', tid: 'Промокоды' },
];
