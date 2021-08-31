export const USER_MODAL_ITEMS = [
  { id: 1, path: '/profile',           tid: 'Мой профиль' },
  { id: 2, path: '/favorites',         tid: 'HEADER.USER_MENU.FAVORITE' },
  { id: 3, path: '/purchases-history', tid: 'HEADER.USER_MENU.PURCHASE_HISTORY' },
  { id: 4, path: '/settings',          tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_USER_MODAL_ITEMS = [
  ...USER_MODAL_ITEMS,
  { id: 5,  divider: true },
  { id: 6,  path: '/create-product',   tid: 'Создание продукта' },
  { id: 7,  path: '/create-article',   tid: 'Создание статьи' },
  { id: 8,  path: '/orders',           tid: 'Таблица заказов' },
  { id: 9, path: '/best-products',     tid: 'Лучшие товары' },
  { id: 10, path: '/slider',           tid: 'Слайдер' },
  { id: 11, path: '/promocodes',       tid: 'Промокоды' },
];
