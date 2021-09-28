export const MASTER_CLASSES_ROUTE_PATH = '/master-class/';
export const MASTER_CLASSES_STORE_NAME = 'MASTER_CLASSES';
export const MASTER_CLASSES_API = {
  MASTER_CLASSES_LOAD_DATA: {
    ENDPOINT: (currentLang) => `/master-class/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  MASTER_CLASSES_LOAD_DATA_AUTH: {
    ENDPOINT: (currentLang) => `/master-class/auth/get?lang=${currentLang}`,
    TYPE: 'GET',
  },
  MASTER_CLASSES_UPDATE: {
    ENDPOINT: (id) => `/master-class/update/${id}`,
    TYPE: 'PUT',
  },
};
