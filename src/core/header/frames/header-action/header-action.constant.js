export const USER_MODAL_ITEMS = [
  { id: 1, path: '/my-likes', tid: 'HEADER.USER_MENU.FAVORITE' }, // Путь тестовой, так как незнаю точную страницу
  { id: 2, path: '/my-patterns', tid: 'HEADER.USER_MENU.PURCHASED_PATTERNS' },
  { id: 3, path: '/my-purchases', tid: 'HEADER.USER_MENU.PURCHASE_HISTORY' },
  { id: 4, path: '/settings', tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_USER_MODAL_ITEMS = [
  ...USER_MODAL_ITEMS,
  { id: 5,  divider: true },
  { id: 6,  path: '/about-account',    tid: 'Об аккаунте' },
  { id: 7,  path: '/create-product',   tid: 'Создание продукта' },
  { id: 8,  path: '/create-article',   tid: 'Создание мастер-класса' },
  { id: 9,  path: '/orders',           tid: 'Таблица заказов' },
  { id: 10, path: '/compilation',      tid: 'Подборки' },
  { id: 11, path: '/edit-compilation', tid: 'Редактирование подборки' },
  { id: 12, path: '/order-number',     tid: 'Подробно о заказе' },
  { id: 13, path: '/slider-list',      tid: 'Список слайдеров' },
  { id: 14, path: '/promocodes',       tid: 'Промокоды' },
];
