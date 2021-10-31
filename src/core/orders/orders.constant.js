export const ORDERS_ROUTE_PATH = '/orders';
export const ORDERS_STORE_NAME = 'ORDERS';
export const ORDERS_API = {
  ORDERS_LOAD: {
    ENDPOINT: (page = 1) => `purchase/get?page=${page}`,
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
