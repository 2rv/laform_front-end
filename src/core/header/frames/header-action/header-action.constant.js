export const USER_MODAL_ITEMS = [
  { id: 1, path: '/my-likes', tid: 'HEADER.USER_MENU.FAVORITE' }, // Путь тестовой, так как незнаю точную страницу
  { id: 2, path: '/my-patterns', tid: 'HEADER.USER_MENU.PURCHASED_PATTERNS' },
  { id: 3, path: '/my-purchases', tid: 'HEADER.USER_MENU.PURCHASE_HISTORY' },
  { id: 4, path: '/settings', tid: 'HEADER.USER_MENU.SETTINGS' },
];

export const ADMIN_USER_MODAL_ITEMS = [
  ...USER_MODAL_ITEMS,
  { id: 5, path: '/about-account', tid: 'Об аккаунте' },
  { id: 6, path: '/create-product', tid: 'Создание продукта' },
  { id: 7, path: '/create-article', tid: 'Создание мастер-класса' },
  { id: 8, path: '/orders', tid: 'Таблица заказов' },
  { id: 9, path: '/compilation', tid: 'Подборки' },
  { id: 10, path: '/edit-compilation', tid: 'Редактирование подборки' },
  { id: 11, path: '/order-number', tid: 'Подробно о заказе' },
  { id: 12, path: '/slider-list', tid: 'Список слайдеров' },
];
