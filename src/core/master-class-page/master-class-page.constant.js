export const MASTER_CLASS_PAGE_ROUTE_PATH = '/purchases/master-class/';
export const MASTER_CLASS_PAGE_STORE_NAME = 'MASTER_CLASS_PAGE';

export const MASTER_CLASS_PAGE_API = {
  MASTER_CLASS_DATA_UPLOAD: {
    ENDPOINT: (id) => `/purchase/user/get/master-class/${id}`,
    TYPE: 'GET',
  },
};
