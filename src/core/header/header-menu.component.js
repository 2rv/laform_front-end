import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import {
  NavMenu,
  CartButton,
  ModalMenu,
  AuthLinks,
  MenuButton,
  LogoMobile,
  EmailConfirmed,
} from '../header-component';
import { SearchButtonContainer } from '../search-button/search-button.container';

export function HeaderMenuComponent(props) {
  const {
    cartCount,
    activePath,
    isAuth,
    userName,
    currentLang,
    navMenuItems,
    modalMenuItems,
    setSidebarOpen,
    sidebarIsOpen,
    emailConfirmed,
  } = props;
  return (
    <Container>
      <MiddleCase>
        <MenuButton open={sidebarIsOpen} setOpen={setSidebarOpen} />
        <LogoMobile />
      </MiddleCase>
      <NavMenu items={navMenuItems} activePath={activePath} />
      <Case>
        {isAuth && !emailConfirmed && <EmailConfirmed />}
        {isAuth && (
          <MenuModal
            currentLang={currentLang}
            modalMenuItems={modalMenuItems}
            userName={userName}
          />
        )}
        {!isAuth && <LinksAuth />}
        <SearchButtonContainer />
        <CartButton cartCount={cartCount} />
      </Case>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  gap: ${spacing(6)};
  align-items: center;
  justify-content: space-between;
`;
const Case = styled.div`
  display: flex;
  gap: ${spacing(1)};
  align-items: center;
`;
const LinksAuth = styled(AuthLinks)`
  display: block;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const MenuModal = styled(ModalMenu)`
  display: flex;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const MiddleCase = styled(Case)`
  display: none;
  @media screen and (max-width: 1070px) {
    display: flex;
  }
`;
