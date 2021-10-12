import { TextPrimary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';
import {
  BrandLogo,
  AuthLinks,
  LangSelect,
  ModalMenu,
} from '../header-component';

export function HeaderLogoComponent(props) {
  const { activePath, isAuth, currentLang, modalMenuItems, userName } = props;
  return (
    <Container>
      {isAuth ? (
        <ModalMenu
          mobile
          currentLang={currentLang}
          modalMenuItems={modalMenuItems}
          userName={userName}
        />
      ) : (
        <AuthLinks mobile />
      )}
      <BrandLogo />
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
