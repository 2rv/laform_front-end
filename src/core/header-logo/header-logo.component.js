import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LogoComponent, LangSelectorComponent } from './frames';
import { LinkPrimary } from '../../lib/element/link';
import { TextSecondary } from '../../lib/element/text';
import { LOGIN_ROUTE_PATH, SIGNUP_ROUTE_PATH } from './header-logo.constant';

export function HeaderLogoComponent(props) {
  const { currentLang, supportedLang, isMobile } = props;

  return (
    <Container>
      {isMobile ? (
        <div>
          <Link tid="HEADER_LOGO.MOBILE.LOGIN" path={LOGIN_ROUTE_PATH} />
          &nbsp;
          <Text tid="HEADER_LOGO.MOBILE.OR" />
          &nbsp;
          <Link tid="HEADER_LOGO.MOBILE.SIGNUP" path={SIGNUP_ROUTE_PATH} />
        </div>
      ) : (
        <LogoComponent />
      )}
      <LangSelectorComponent
        currentLang={currentLang}
        supportedLang={supportedLang}
      />
    </Container>
  );
}

const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
  user-select: none;
`;
const Link = styled(LinkPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  user-select: none;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
