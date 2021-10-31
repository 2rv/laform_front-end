export const USER_ORDERS_ROUTE_PATH = '/my-orders';
export const USER_ORDERS_STORE_NAME = 'USER_ORDERS';
export const USER_ORDERS_API = {
  USER_ORDERS_LOAD: {
    ENDPOINT: (page = 1) => `purchase/user/get?page=${page}`,
    TYPE: 'GET',
  },
};

export const PURCHASE_STATUS_INFO = {
  0: 'Сформирован',
  1: 'Ожидает оплаты',
  2: 'Оплачено',
  3: 'Ожидает отправки',
  4: 'Отправлено',
  5: 'Получено',
  6: 'Отменено',
  7: 'Вовращен отправителю',
  8: 'Возвращен по гарантии',
};
