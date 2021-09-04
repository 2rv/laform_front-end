import styled from 'styled-components';
import { BrandLogo, AuthLinks, LangSelect } from '../header-component';

export function HeaderLogoComponent(props) {
  const { activePath, isAuth, currentLang, isMobile } = props;
  return (
    <Container>
      {isMobile ? <AuthLinks /> : <BrandLogo />}
      <LangSelect currentLang={currentLang} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  align-items: center;
  justify-content: space-between;
`;
