export const MASTER_CLASS_PAGE_ROUTE_PATH = '/purchases/master-class/:id';
export const MASTER_CLASS_PAGE_STORE_NAME = 'MASTER_CLASS_PAGE';

export const MASTER_CLASS_PAGE_API = {
  MASTER_CLASS_DATA_UPLOAD: {
    ENDPOINT: (currentLang, id) =>
      `/master-class/get/${id}/?lang=${currentLang}`, // сделать правильно
    TYPE: 'GET',
  },
};
