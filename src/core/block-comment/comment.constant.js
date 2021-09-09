export const COMMENT_STORE_NAME = 'COMMENT_STORE';

export const COMMENT_API = {
  COMMENT_UPLOAD: {
    ENDPOINT: (id, type) => {
      if (type === 0) return `/comment/get/master-class/${id}`;
      if (type === 1) return `/comment/get/`;
      if (type === 2) return `/comment/get/`;
      if (type === 3) return `/comment/get/`;
      if (type === 4) return `/comment/get/`;
    },
    TYPE: 'GET',
  },

  COMMENT_CREATE: {
    ENDPOINT: '/comment/create',
    TYPE: 'POST',
  },
};
