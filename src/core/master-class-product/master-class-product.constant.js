export const MASTER_CLASS_PRODUCT_ROUTE_PATH = '/master-class/[id]';

export const MASTER_CLASS_PRODUCT_STORE_NAME = 'master-class-product';

export const MASTER_CLASS_PRODUCT_API = {
  MASTER_CLASS_PRODUCT_UPLOAD: {
    ENDPOINT: (currentLang, id) =>
      `/master-class/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
  MASTER_CLASS_PRODUCT_UPLOAD_AUTH: {
    ENDPOINT: (currentLang, id) =>
      `/master-class/auth/get/${id}/?lang=${currentLang}`,
    TYPE: 'GET',
  },
};
