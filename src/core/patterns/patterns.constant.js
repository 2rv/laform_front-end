export const PATTERNS_ROUTE_PATH = ({ type } = { type: '[[...type]]' }) =>
  `/patterns/${type}`;

export const PATTERNS_STORE_NAME = 'PATTERNS_STORE';

export const PATTERNS_TABS = [
  { name: 'PATTERNS.PATTERNS.MENU.ALL', path: PATTERNS_ROUTE_PATH() },
  {
    name: 'PATTERNS.PATTERNS.MENU.PRINTED',
    path: PATTERNS_ROUTE_PATH,
    pathConfig: { params: { type: 'printed' } },
  },
  {
    name: 'PATTERNS.PATTERNS.MENU.ELECTRONIC',
    path: PATTERNS_ROUTE_PATH,
    pathConfig: { params: { type: 'electronic' } },
  },
];

function queryBuilder(query) {
  const { currentLang, page, where, sort, by, category, type } = query;
  let result = '';
  if (currentLang) result = result + `&lang=${currentLang}`;
  if (page) result = result + `&page=${page}`;
  if (where) result = result + `&where=${where}`;
  if (sort) result = result + `&sort=${sort}`;
  else result = result + `&sort=date`;
  if (by) result = result + `&by=${by}`;
  if (type) result = result + `&type=${type}`;
  if (category) result = result + `&category=${category}`;
  return result;
}
function convertType(type) {
  if (type === 'electronic') return `&type=1`;
  if (type === 'printed') return `&type=2`;
  return `&type=12`;
}
export const PATTERNS_API = {
  GET_PATTERNS: {
    ENDPOINT: (query, isAuth) => {
      if (isAuth) return `/pattern-product/auth/get?${queryBuilder(query)}`;
      return `/pattern-product/get?${queryBuilder(query)}`;
    },
    TYPE: 'GET',
  },
  GET_CATEGORIES: {
    ENDPOINT: (currentLang, type) =>
      `/category/get?lang=${currentLang}${convertType(type)}`,
    TYPE: 'GET',
  },
};
