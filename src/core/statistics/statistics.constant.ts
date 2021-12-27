export const STATISTICS_ROUTE_PATH = ({ type } = { type: '[[...type]]' }) =>
  `/statistics/${type}`;

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
