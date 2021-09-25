import { HOME_ROUTE_PATH } from '../home';

export const ERROR_PAGE_CONFIG = {
  401: {
    titleTid: 'ERROR_PAGE.401.TITLE',
    textTid: 'ERROR_PAGE.401.TEXT',
  },
  404: {
    titleTid: 'ERROR_PAGE.404.TITLE',
    textTid: 'ERROR_PAGE.404.TEXT',
    linkTid: 'ERROR_PAGE.404.LINK_TEXT',
    linkPath: HOME_ROUTE_PATH,
  },
  500: {
    titleTid: 'ERROR_PAGE.500.TITLE',
    textTid: 'ERROR_PAGE.500.TEXT',
  },
};
