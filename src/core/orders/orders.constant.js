export const ORDERS_ROUTE_PATH = '/orders';
export const ORDERS_STORE_NAME = 'ORDERS';
export const ORDERS_API = {
  ORDERS_LOAD: {
    ENDPOINT: (inputValue, size, page) =>
      `purchase/get?filter=${inputValue}&size=${size}&page=${page}`, // это не правильно нужно уточнить
    TYPE: 'GET',
  },
};
