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
    textTid:
      'Страницы на которую вы перешли – не существует. Можете перейти на главную',
    linkTid: 'ERROR_PAGE.404.LINK_TEXT',
    linkPath: HOME_ROUTE_PATH,
    image: NotFoundImage,
  },
  NOT_PAID: {
    titleTid: 'Заказ не оплачен!',
    textTid:
      'К сожалению, при оплате заказа возникли некоторые проблемы, решить которые вам поможет наша поддержка либо поддержка платежной системы.',
    linkTid: 'ERROR_PAGE.404.LINK_TEXT',
    linkPath: HOME_ROUTE_PATH,
    image: NotPaidImage,
  },
  SUCCESS_PAID: {
    titleTid: 'Заказ оплачен!',
    textTid:
      'Вы успешно оплатили свой заказ.  Наблюдать за его осстоянием Вы можете в личном кабинете, в списке Ваших покупок.',
    linkTid: 'Перейти в список покупок',
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
