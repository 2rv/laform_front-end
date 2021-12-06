export const STATISTICS_ROUTE_PATH = '/statistics';
export const STATISTICS_STORE_NAME = 'STATISTICS';
export const STATISTICS_API = {
  GET_COUNT: {
    ENDPOINT: ({ type, from, to }) =>
      `/statistics/count/get?type=${convertType(type)}&from=${from}&to=${to}`,
    TYPE: 'GET',
  },
  GET_PRICE: {
    ENDPOINT: ({ type, from, to }) =>
      `/statistics/price/get?type=${convertType(type)}&from=${from}&to=${to}`,
    TYPE: 'GET',
  },
  GET_GENERAL: {
    ENDPOINT: ({ type, from, to }) =>
      `/statistics/general/get?type=${convertType(type)}&from=${from}&to=${to}`,
    TYPE: 'GET',
  },
  GET_USERS: {
    ENDPOINT: ({ from, to }) => `/statistics/user/get?from=${from}&to=${to}`,
    TYPE: 'GET',
  },
};

function convertType(type) {
  if (type === null) {
    return 9;
  } else if (type === 'master-class') {
    return 0;
  } else if (type === 'pattern-electronic') {
    return 1;
  } else if (type === 'pattern-print') {
    return 2;
  } else if (type === 'sewing-good') {
    return 3;
  }
}
