import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import {
  NavMenu,
  CartButton,
  ModalMenu,
  AuthLinks,
  MenuButton,
  LogoMobile,
} from '../header-component';

export function HeaderMenuComponent(props) {
  const {
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
        {!isMobile && isAuth && (
          <ModalMenu
            currentLang={currentLang}
            modalMenuItems={modalMenuItems}
            userName={userName}
          />
        )}
        {!isAuth && !isMobile && <AuthLinks />}
        <CartButton isTablet={isTablet} />
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
