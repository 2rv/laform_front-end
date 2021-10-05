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
import { SearchButton } from '../search-button/search-button';

export function HeaderMenuComponent(props) {
  const {
    cartCount,
    activePath,
    isAuth,
    userName,
    currentLang,
    navMenuItems,
    modalMenuItems,
    isMobile,
    isTablet,
    setSidebarOpen,
    sidebarIsOpen,
    emailConfirmed,
  } = props;
  return (
    <Container>
      {isTablet ? (
        <Case>
          <MenuButton open={sidebarIsOpen} setOpen={setSidebarOpen} />
          {isMobile && <LogoMobile />}
        </Case>
      ) : (
        <NavMenu items={navMenuItems} activePath={activePath} />
      )}
      <Case>
        {isAuth && emailConfirmed && <EmailConfirmed isMobile={isMobile} />}
        {!isMobile && isAuth && (
          <ModalMenu
            currentLang={currentLang}
            modalMenuItems={modalMenuItems}
            userName={userName}
          />
        )}
        {!isAuth && !isMobile && <AuthLinks />}
        <SearchButton />
        <CartButton cartCount={cartCount} isTablet={isTablet} />
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
  gap: ${spacing(3)};
  align-items: center;
`;
