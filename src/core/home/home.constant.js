export { ARTICLES_ROUTE_PATH } from '../articles';
export { MASTER_CLASSES_ROUTE_PATH } from '../master-classes';
export { SEWING_GOODS_ROUTE_PATH } from '../sewing-goods';

export const HOME_ROUTE_PATH = '/';
export const HOME_STORE_NAME = 'HOME';

export const HOME_API = {
  MASTER_CLASS_UPLOAD_DATA: {
    ENDPOINT: (currentLang) => `/master-class/pinned/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  MASTER_CLASS_UPLOAD_DATA_AUTH: {
    ENDPOINT: (currentLang) =>
      `/master-class/pinned/get/auth?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_DATA: {
    ENDPOINT: (currentLang) => `/sewing-product/pinned/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_DATA_AUTH: {
    ENDPOINT: (currentLang) =>
      `/sewing-product/pinned/get/auth?lang=${currentLang}`,
    TYPE: 'GET',
  },
  ARTICLE_UPLOAD_DATA: {
    ENDPOINT: (currentLang) => `/post/pinned/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  ARTICLE_UPLOAD_DATA_AUTH: {
    ENDPOINT: (currentLang) => `/post/pinned/get/auth?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
