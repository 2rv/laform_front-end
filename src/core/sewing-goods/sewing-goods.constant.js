export const SEWING_GOODS_ROUTE_PATH = '/sewing-goods';
export const SEWING_GOODS_STORE_NAME = 'SEWING_GOODS';
export const SEWING_GOODS_API = {
  SEWING_GOODS_UPLOAD: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/sewing-product/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : ''
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPLOAD_AUTH: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/sewing-product/auth/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : ''
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }`,
    TYPE: 'GET',
  },
  SEWING_GOODS_UPDATE: {
    ENDPOINT: (id) => `/sewing-product/update/${id}`,
    TYPE: 'PUT',
  },
  SEWING_GOODS_DELETE: {
    ENDPOINT: (id) => `/sewing-product/delete/${id}`,
    TYPE: 'DELETE',
  },
  CATEGORIES_UPLOAD_DATA: {
    ENDPOINT: (currentLang, type) => `/category/get?lang=${currentLang}&type=${type}`,
    TYPE: 'GET',
  },
};
