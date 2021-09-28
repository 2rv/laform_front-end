import styled, { css } from 'styled-components';
import React from 'react';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { HeaderLogoComponent } from './header-logo.component';
import { HeaderMenuComponent } from './header-menu.component';
import { MobileNavMenu } from '../header-component';

export function HeaderComponent(props) {
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
      <HeaderLogoCase>
        <HeaderLogoComponent
          activePath={activePath}
          isAuth={isAuth}
          userName={userName}
          modalMenuItems={modalMenuItems}
          currentLang={currentLang}
          isMobile={isMobile}
        />
      </HeaderLogoCase>
      <HeaderMenuCase>
        <HeaderMenuComponent
          emailConfirmed={emailConfirmed}
          cartCount={cartCount}
          setSidebarOpen={setSidebarOpen}
          sidebarIsOpen={sidebarIsOpen}
          activePath={activePath}
          isAuth={isAuth}
          userName={userName}
          currentLang={currentLang}
          navMenuItems={navMenuItems}
          modalMenuItems={modalMenuItems}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </HeaderMenuCase>
      {isMobile && <MobileNavMenu activePath={activePath} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderLogoCase = styled.div`
  display: flex;
  height: 100px;
  padding: 0 ${spacing(3)};
  justify-content: center;
  @media screen and (max-width: 720px) {
    height: 50px;
  }
`;
const HeaderMenuCase = styled.div`
  display: flex;
  height: 80px;
  padding: 0 ${spacing(3)};
  justify-content: center;
  background-color: ${THEME_COLOR.GRAY};
  @media screen and (max-width: 720px) {
    height: 70px;
  }
`;
