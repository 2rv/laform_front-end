export const USER_MODAL_ITEMS = [
  { id: 1, path: '/profile',           tid: 'Мой профиль' },
  { id: 2, path: '/favorites',         tid: 'HEADER.USER_MENU.FAVORITE' },
  { id: 3, path: '/purchases-history', tid: 'HEADER.USER_MENU.PURCHASE_HISTORY' },
  { id: 4, path: '/orders-list',       tid: 'Список заказов' },
  { id: 5, path: '/settings',          tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_USER_MODAL_ITEMS = [
  ...USER_MODAL_ITEMS,
  { id: 6,  divider: true },
  { id: 7,  path: '/create-product',   tid: 'Создание продукта' },
  { id: 8,  path: '/create-article',   tid: 'Создание статьи' },
  { id: 9,  path: '/orders',           tid: 'Таблица заказов' },
  { id: 10, path: '/users-order',     tid: 'Список заказов' },
  { id: 11, path: '/best-products',    tid: 'Лучшие товары' },
  { id: 12, path: '/slider',           tid: 'Слайдер' },
  { id: 13, path: '/promocodes',       tid: 'Промокоды' },
];
