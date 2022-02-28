import styled from 'styled-components';
import { ReactComponent as ErrorImage } from 'src/asset/svg/page-error.svg';
import { ReactComponent as NotFoundImage } from 'src/asset/svg/page-not-found.svg';
import { ReactComponent as NotPaidImage } from 'src/asset/svg/page-not-paid.svg';
import { ReactComponent as PaidImage } from 'src/asset/svg/page-paid.svg';
import { HOME_ROUTE_PATH } from '../home';
import { USER_ORDERS_ROUTE_PATH } from '../user-orders';

const ImageError = styled(ErrorImage)`
  width: 360px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ERROR_PAGE_CONFIG = {
  401: {
    titleTid: 'ERROR_PAGE.401.TITLE',
    textTid: 'ERROR_PAGE.401.TEXT',
    image: ImageError,
  },
  500: {
    titleTid: 'ERROR_PAGE.500.TITLE',
    textTid: 'ERROR_PAGE.500.TEXT',
    image: ImageError,
  },
  404: {
    titleTid: 'ERROR_PAGE.404.TITLE',
    textTid: 'ERROR_PAGE.404.TEXT',
    linkTid: 'ERROR_PAGE.404.LINK_TEXT',
    linkPath: HOME_ROUTE_PATH,
    image: NotFoundImage,
  },
  NOT_PAID: {
    titleTid: 'ERROR_PAGE.NOT_PAID.TITLE',
    textTid: 'ERROR_PAGE.NOT_PAID.TEXT',
    linkTid: 'ERROR_PAGE.NOT_PAID.LINK_TEXT',
    linkPath: HOME_ROUTE_PATH,
    image: NotPaidImage,
  },
  SUCCESS_PAID: {
    titleTid: 'ERROR_PAGE.SUCCESS_PAID.TITLE',
    textTid: 'ERROR_PAGE.SUCCESS_PAID.TEXT',
    linkTid: 'ERROR_PAGE.SUCCESS_PAID.LINK_TEXT',
    linkPath: USER_ORDERS_ROUTE_PATH,
    image: PaidImage,
  },
};

export type ErrorPageProps = {
  errorStatus: keyof typeof ERROR_PAGE_CONFIG;
};

export type ErrorComponentProps = {
  config: {
    titleTid: string;
    textTid: string;
    linkTid?: string;
    linkPath?: string;
    image: any;
  };
};
