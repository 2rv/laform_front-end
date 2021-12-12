export const ALL_PRODUCTS_ROUTE_PATH = ({ type } = { type: '[[...type]]' }) =>
  `/all-products/${type}`;
export const ALL_PRODUCTS_STORE_NAME = 'ALL_PRODUCTS';
export const ALL_PRODUCTS_TAB_TYPES = {
  0: 'master-class',
  1: 'pattern-electronic',
  2: 'pattern-print',
  3: 'sewing-good',
  4: 'blog',
};
export const ALL_PRODUCTS_TABS = [
  {
    name: 'ALL_PRODUCTS.TABS.MASTER_CLASS',
    path: ALL_PRODUCTS_ROUTE_PATH,
    pathConfig: { params: { type: ALL_PRODUCTS_TAB_TYPES[0] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.ELECTRONIC_PATTERN_PRODUCT',
    path: ALL_PRODUCTS_ROUTE_PATH,
    pathConfig: { params: { type: ALL_PRODUCTS_TAB_TYPES[1] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.PRINTED_PATTERN_PRODUCT',
    path: ALL_PRODUCTS_ROUTE_PATH,
    pathConfig: { params: { type: ALL_PRODUCTS_TAB_TYPES[2] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.SEWING_PRODUCT',
    path: ALL_PRODUCTS_ROUTE_PATH,
    pathConfig: { params: { type: ALL_PRODUCTS_TAB_TYPES[3] } },
  },
  {
    name: 'ALL_PRODUCTS.TABS.POST',
    path: ALL_PRODUCTS_ROUTE_PATH,
    pathConfig: { params: { type: ALL_PRODUCTS_TAB_TYPES[4] } },
  },
];

function queryBuilder(query) {
  const { currentLang, page, where, sort, by, category, type } = query;
  let result = 'getAll=true';
  if (currentLang) result = result + `&lang=${currentLang}`;
  if (page) result = result + `&page=${page}`;
  if (where) result = result + `&where=${where}`;
  if (sort) result = result + `&sort=${sort}`;
  else result = result + `&sort=date`;
  if (by) result = result + `&by=${by}`;
  if (+type === 1) result = result + `&type=electronic`;
  if (+type === 2) result = result + `&type=printed`;
  if (category) result = result + `&category=${category}`;
  return result;
}
function getEndpointByType(type) {
  if (+type === 0) return 'master-class';
  if (+type === 1) return 'pattern-product';
  if (+type === 2) return 'pattern-product';
  if (+type === 3) return 'sewing-product';
  if (+type === 4) return 'post';
}

export const ALL_PRODUCTS_API = {
  FETCH_SEWING_PRODUCTS: {
    ENDPOINT: (query) => `/sewing-product/get?${queryBuilder(query)}`,
    TYPE: 'GET',
  },
  FETCH_MASTER_CLASSES: {
    ENDPOINT: (query) => `/master-class/get?${queryBuilder(query)}`,
    TYPE: 'GET',
  },
  FETCH_PATTERN_PRODUCTS: {
    ENDPOINT: (query) => `/pattern-product/get?${queryBuilder(query)}`,
    TYPE: 'GET',
  },
  FETCH_POSTS: {
    ENDPOINT: (query) => `/post/get?${queryBuilder(query)}`,
    TYPE: 'GET',
  },
  FETCH_CATEGORIES: {
    ENDPOINT: (currentLang, type) =>
      `/category/get?lang=${currentLang}&type=${type}`,
    TYPE: 'GET',
  },
  DISABLE_PRODUCT: {
    ENDPOINT: (type, id) => `/${getEndpointByType(type)}/disable/${id}`,
    TYPE: 'PUT',
  },
};
