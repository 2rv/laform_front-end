export const STATISTICS_ROUTE_PATH = '/statistics';
export const STATISTICS_STORE_NAME = 'STATISTICS';
export const STATISTICS_API = {
  ORDERS_COUNT: {
    ENDPOINT: ({ type, from, to }) => `/statistics/count/get?type=${type}&from=${from}&to=${to}`,
    TYPE: 'GET',
  },
  PRICE: {
    ENDPOINT: ({ type, from, to }) => `/statistics/price/get?type=${type}&from=${from}&to=${to}`,
    TYPE: 'GET',
  },
  PURCHASED_PRODUCTS_COUNT_AND_PRICE: {
    ENDPOINT: ({ type }) => `/statistics/count-and-price/get?type=${type}`,
    TYPE: 'GET',
  },
};
