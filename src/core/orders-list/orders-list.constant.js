export const ORDERS_LIST_ROUTE_PATH = '/orders-list';
export const ORDERS_LIST_STORE_NAME = 'ORDERS_LIST';
export const ORDERS_LIST_API = {
  ORDERS_LOAD: {
    ENDPOINT: (itemsPerPage, currentPage) => `purchase/user/get?size=${itemsPerPage}&page=${currentPage}`,
    TYPE: 'GET',
  },
};
