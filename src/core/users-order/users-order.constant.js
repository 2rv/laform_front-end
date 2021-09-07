export const USERS_ORDER_ROUTE_PATH = '/users-order';
export const USERS_ORDER_STORE_NAME = 'USERS_ORDER';
export const USERS_ORDER_API = {
  USERS_ORDER_LOAD: {
    ENDPOINT: (inputValue, size, page) => `purchase/get?filter=${inputValue}&size=${size}&page=${page}`,
    TYPE: 'GET',
  },
};
