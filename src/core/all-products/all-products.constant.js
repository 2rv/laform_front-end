export const ALL_PRODUCTS_ROUTE_PATH = '/all-products';
export const ALL_PRODUCTS_STORE_NAME = 'ALL_PRODUCTS';
export const ALL_PRODUCTS_GUEST_REDIRECT = '';
export const ALL_PRODUCTS_API = {
  FETCH_SEWING_PRODUCTS: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/sewing-product/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : '&sort=date'
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }&allProductsPage=yes`,
    TYPE: 'GET',
  },
  FETCH_MASTER_CLASSES: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/master-class/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : '&sort=date'
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }&allProductsPage=yes`,
    TYPE: 'GET',
  },
  FETCH_PATTERN_PRODUCTS: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category, type }) =>
      `/pattern-product/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : '&sort=date'
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(type) ? `&type=${type}` : ''
      }${Boolean(category) ? `&category=${category}` : ''}&allProductsPage=yes`,
    TYPE: 'GET',
  },
  FETCH_POSTS: {
    ENDPOINT: ({ currentLang, page, where, sort, by, category }) =>
      `/post/get?lang=${currentLang}${
        Boolean(page) ? `&page=${page}` : ''
      }${Boolean(where) ? `&where=${where}` : ''}${
        Boolean(sort) ? `&sort=${sort}` : '&sort=date'
      }${Boolean(by) ? `&by=${by}` : ''}${
        Boolean(category) ? `&category=${category}` : ''
      }&allProductsPage=yes`,
    TYPE: 'GET',
  },
  FETCH_CATEGORIES: {
    ENDPOINT: (currentLang, type) => `/category/get?lang=${currentLang}&type=${type}`,
    TYPE: 'GET',
  },
  DELETE_PRODUCT: {
    ENDPOINT: (product, id) => `${product}/delete/${id}`,
    TYPE: 'DELETE',
  },
};
