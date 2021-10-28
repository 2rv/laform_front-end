export const CREATE_MASTER_CLASS_ROUTE_PATH = '/master-class/create';
export const CREATE_MASTER_CLASS_STORE_NAME = 'CREATE_MASTER_CLASS';
export const CREATE_MASTER_CLASS_API = {
  CREATE_MASTER_CLASS_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/master-class/create',
  },
  CREATE_MASTER_CLASS_IMAGE_PRE_UPLOAD: {
    TYPE: 'POST',
    ENDPOINT: '/file/create-many',
  },
  MASTER_CLASS_LOAD: {
    ENDPOINT: (id) => `/master-class/get/for-update/${id}/?lang=ru`,
    TYPE: 'GET',
  },
  MASTER_CLASS_CHANGE: {
    ENDPOINT: (id) => `/master-class/update/${id}/?lang=ru`,
    TYPE: 'PUT',
  },
};
