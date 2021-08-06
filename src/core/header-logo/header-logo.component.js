import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { ContentLayout } from '../../lib/element/layout';
import { LogoComponent, LangSelectorComponent } from './frames';
import { LinkPrimary } from '../../lib/element/link';
import { TextSecondary } from '../../lib/element/text';

export function HeaderLogoComponent(props) {
  const { currentLang, supportedLang, isMobile } = props;

  return (
    <Container>
      <Content>
        {isMobile ? (
          <div>
            <Link tid="HEADER_LOGO.MOBILE.LOGIN" />
            &nbsp;
            <Text tid="HEADER_LOGO.MOBILE.OR" />
            &nbsp;
            <Link tid="HEADER_LOGO.MOBILE.SIGNUP" />
          </div>
        ) : (
          <LogoComponent />
        )}
        <LangSelectorComponent
          currentLang={currentLang}
          supportedLang={supportedLang}
        />
      </Content>
    </Container>
  );
}

const Text = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const Link = styled(LinkPrimary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;

const MobileAuthContainer = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing(3)};
`;

const Content = styled(ContentLayout)`
  display: flex;
  justify-content: space-between;
  padding: 0 ${spacing(6)};
  @media screen and (max-width: 600px) {
    padding: 0 ${spacing(3)};
  }
`;
