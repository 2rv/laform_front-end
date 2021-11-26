import { HOME_ROUTE_PATH } from '../home';
import { ReactComponent as ErrorImage } from '../../asset/svg/error-page-image.svg';
import styled from 'styled-components';

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
  404: {
    titleTid: 'ERROR_PAGE.404.TITLE',
    textTid: 'ERROR_PAGE.404.TEXT',
    linkTid: 'ERROR_PAGE.404.LINK_TEXT',
    linkPath: HOME_ROUTE_PATH,
    image: ImageError,
  },
  500: {
    titleTid: 'ERROR_PAGE.500.TITLE',
    textTid: 'ERROR_PAGE.500.TEXT',
    image: ImageError,
  },
};
