export const PROMOCODES_ROUTE_PATH = '/promocodes';
export const PROMOCODES_STORE_NAME = 'PROMOCODES';
export const PROMOCODES_API = {
  PROMOCODES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `/promocodes/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
