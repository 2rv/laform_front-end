import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../asset/svg/logo-mobile.svg';

export function LogoMobile() {
  return <LogoImage src="/static/image/logo-header-mobile.png" />;
}
const LogoImage = styled.img`
  display: none;
  width: 46px;
  height: 46px;
  min-width: 46px;
  min-height: 46px;
  user-select: none;
  @media screen and (max-width: 720px) {
    display: block;
  }
`;
