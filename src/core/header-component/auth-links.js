import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LinkPrimary } from '../../lib/element/link';
import { TextSecondary } from '../../lib/element/text';
import { LOGIN_ROUTE_PATH } from '../login';
import { SIGNUP_ROUTE_PATH } from '../signup';

export function AuthLinks(props) {
  const { mobile } = props;
  return (
    <Container mobile={mobile}>
      <Link tid="HEADER_LOGO.MOBILE.LOGIN" path={LOGIN_ROUTE_PATH} />
      &nbsp;
      <Text tid="HEADER_LOGO.MOBILE.OR" />
      &nbsp;
      <Link tid="HEADER_LOGO.MOBILE.SIGNUP" path={SIGNUP_ROUTE_PATH} />
    </Container>
  );
}

const Container = styled.div`
  ${(p) => {
    return p.mobile
      ? css`
          display: none;
          @media screen and (max-width: 720px) {
            display: block;
          }
        `
      : css`
          display: block;
          @media screen and (max-width: 720px) {
            display: none;
          }
        `;
  }}
`;
const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
  user-select: none;
`;

const Link = styled(LinkPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  user-select: none;
`;
