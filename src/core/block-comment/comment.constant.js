export const COMMENT_STORE_NAME = 'COMMENT_STORE';

export const COMMENT_API = {
  COMMENT_UPLOAD: {
    ENDPOINT: (id, type) => {
      if (type === 0) return `/comment/get/master-class/${id}`;
      if (type === 1) return `/comment/get/pattern-product/${id}`;
      if (type === 2) return `/comment/get/pattern-product/${id}`;
      if (type === 3) return `/comment/get/sewing-product/${id}`;
      if (type === 4) return `/comment/get/post/${id}`;
    },
    TYPE: 'GET',
  },

  COMMENT_CREATE: {
    ENDPOINT: '/comment/create',
    TYPE: 'POST',
  },
  SUB_COMMENT_CREATE: {
    ENDPOINT: '/comment/sub/create',
    TYPE: 'POST',
  },

  COMMENT_DELETE: {
    ENDPOINT: (id) => `/comment/delete/${id}`,
    TYPE: 'DELETE',
  },
  SUB_COMMENT_DELETE: {
    ENDPOINT: (id) => `/comment/sub/delete/${id}`,
    TYPE: 'DELETE',
  },
};
