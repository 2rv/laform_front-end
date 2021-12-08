import { convertQuery } from './statistics.convert';

export const STATISTICS_ROUTE_PATH = ({ type } = { type: '[[...type]]' }) =>
  `/statistics/${type}`;

export const STATISTICS_STORE_NAME = 'STATISTICS';

export const STATISTICS_API = {
  GET_COUNT: {
    ENDPOINT: (query) => `/statistics/count/get?${convertQuery(query)}`,
    TYPE: 'GET',
  },
  GET_PRICE: {
    ENDPOINT: (query) => `/statistics/price/get?${convertQuery(query)}`,
    TYPE: 'GET',
  },
  GET_GENERAL: {
    ENDPOINT: (query) => `/statistics/general/get?${convertQuery(query)}`,
    TYPE: 'GET',
  },
  GET_USERS: {
    ENDPOINT: (query) => {
      return `/statistics/user/get?${convertQuery(query)}`;
    },
    TYPE: 'GET',
  },
};

export const STATISTICS_TABS = [
  { name: 'STATISTICS.TABS.TOTAL', path: STATISTICS_ROUTE_PATH() },
  {
    name: 'STATISTICS.TABS.MASTER_CLASS',
    path: STATISTICS_ROUTE_PATH,
    pathConfig: { params: { type: 'master-class' } },
  },
  {
    name: 'STATISTICS.TABS.PRINT_PATTERNS',
    path: STATISTICS_ROUTE_PATH,
    pathConfig: { params: { type: 'pattern-print' } },
  },
  {
    name: 'STATISTICS.TABS.ELECTRONIC_PATTERNS',
    path: STATISTICS_ROUTE_PATH,
    pathConfig: { params: { type: 'pattern-electronic' } },
  },
  {
    name: 'STATISTICS.TABS.SEWING_GOODS',
    path: STATISTICS_ROUTE_PATH,
    pathConfig: { params: { type: 'sewing-good' } },
  },
];

export const STATISTICS_PERIODS = [
  {
    id: 0,
    tid: 'День',
    value: 1,
  },
  {
    id: 1,
    tid: 'Неделя',
    value: 7,
  },
  {
    id: 2,
    tid: '2 Недели',
    value: 14,
  },
  {
    id: 3,
    tid: 'Месяц',
    value: 30,
  },
  {
    id: 4,
    tid: 'Квартал',
    value: 90,
  },
  {
    id: 5,
    tid: 'Пол года',
    value: 182,
  },
  {
    id: 6,
    tid: 'Год',
    value: 365,
  },
  {
    id: 7,
    tid: 'Всё время',
    value: 7300,
  },
];
