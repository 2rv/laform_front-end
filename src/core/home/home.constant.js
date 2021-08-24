export { ARTICLES_ROUTE_PATH } from '../articles';
export { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
export { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';

export const HOME_ROUTE_PATH = '/';
export const HOME_STORE_NAME = 'HOME';

export const HOME_API = {
  PINNED_MASTER_CLASSES_UPLOAD: {
    ENDPOINT: (currentLang) => `/master-class/pinned/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
