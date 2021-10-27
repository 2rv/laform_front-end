export const ORDERS_ROUTE_PATH = '/orders';
export const ORDERS_STORE_NAME = 'ORDERS';
export const ORDERS_API = {
  ORDERS_LOAD: {
    ENDPOINT: (page = 1) => `purchase/get?page=${page}`,
    TYPE: 'GET',
  },
};
