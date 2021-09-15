import { TextPrimary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import { BrandLogo, AuthLinks, LangSelect } from '../header-component';

export function HeaderLogoComponent(props) {
  const { activePath, isAuth, currentLang, isMobile, userName } = props;
  return (
    <Container>
      {isMobile ? (
        isAuth ? (
          <Text tid={userName} />
        ) : (
          <AuthLinks />
        )
      ) : (
        <BrandLogo />
      )}
      <LangSelect currentLang={currentLang} />
    </Container>
  );
}

const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  :first-letter {
    text-transform: uppercase;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  align-items: center;
  justify-content: space-between;
`;
