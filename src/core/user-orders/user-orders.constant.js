export const USER_ORDERS_ROUTE_PATH = '/my-orders';
export const USER_ORDERS_STORE_NAME = 'USER_ORDERS';
export const USER_ORDERS_API = {
  USER_ORDERS_LOAD: {
    ENDPOINT: (page = 1) => `purchase/user/get?page=${page}`,
    TYPE: 'GET',
  },
};
