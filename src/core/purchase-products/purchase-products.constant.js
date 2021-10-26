export const PURCHASE_PRODUCTS_ROUTE_PATH = '/purchases';
export const PURCHASE_PRODUCTS_STORE_NAME = 'PURCHASE_PRODUCTS';
export const PURCHASE_PRODUCTS_API = {
  LOAD_DATA: {
    ENDPOINT: (page = 1) => `purchase/user/get?page=${page}`,
    METHOD: 'GET',
  },
};
