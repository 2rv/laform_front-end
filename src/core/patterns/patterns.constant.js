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
export const PATTERNS_API = {
  GET_PATTERNS: '/pattern-product/get',
  GET_AUTH_PATTERNS: '/pattern-product/auth/get',
  GET_CATEGORIES: {
    ENDPOINT: '/category/get',
    TYPE: 'GET',
  },
};
